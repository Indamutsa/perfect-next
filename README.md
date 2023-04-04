# A demo portfolio site -- tutorial

From Hosna Qasmei : https://github.com/hqasmei

Let us create a folder for our project and then create a next app with typescript

```
mkdir perfect-next
cd perfect-next
# Start the vscode editor
code .
```

Create a repo using github cli

```
git init
gh repo create
```

Let us a dockerfile for our project

```
cat > Dockerfile
    # Paste the following content
    # dev.Dockerfile for development

    FROM node:18-alpine

    WORKDIR /app

    # Install dependencies based on the preferred package manager
    COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
    RUN \
        if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
        elif [ -f package-lock.json ]; then npm ci; \
        elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
        else echo "Lockfile not found." && exit 1; \
        fi

    COPY . .

    CMD yarn dev
```

Let us create the next app

```
yarn create next-app . --typescript --eslint
yarn add tailwindcss postcss autoprefixer
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
yarn dev
```

Add the following to the `tailwind.config.js` file

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Let us add some dependencies

```
yarn add react-scroll
yarn add next-themes
yarn add react-icons
yarn add --save-dev @types/react-scroll
yarn add -D @types/react-scroll
```

Let us push the current changes to the repo

```
git push --set-upstream origin master
p.sh "Creating a demo portfolio -- navbar done"
```

Let us create a working branch

```
git checkout -b dev
git push --set-upstream origin dev
p.sh "working dir in dev"
```

Let us create git actions for our project

```
cat > .github/workflows/main.yml
    name: Build and push Docker image
    on:
    push:
        branches:
        - dev
    jobs:
    build-and-push:
        runs-on: ubuntu-latest
        env:
        DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
        DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}
        IMAGE_NAME: my-app
        steps:
        - name: Checkout code
            uses: actions/checkout@v2
        - name: Login to Docker Hub
            uses: docker/login-action@v1
            with:
            username: ${{ env.DOCKER_USERNAME }}
            password: ${{ env.DOCKER_PASSWORD }}
        - name: Build and push Docker image
            uses: docker/build-push-action@v2
            with:
            context: .
            push: true
            tags: ${{ env.DOCKER_USERNAME }}/${{ env.IMAGE_NAME }}:${{ github.sha }}
```

Let us add the secrets to the repo

```
gh secret set DOCKER_USERNAME
gh secret set DOCKER_PASSWORD
```

To enable docker development,

Let us prepare a react next js dockerfile:

```
cat > Dockerfile
    # dev.Dockerfile for development

    FROM node:18-alpine

    WORKDIR /work

    RUN apk add zsh git vim nano \
        && sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

    COPY startup.sh /usr/local/bin/

    # Set the executable permission on the script
    RUN chmod +x /usr/local/bin/startup.sh

    # Run the startup script when the container starts
    CMD ["/usr/local/bin/startup.sh"]
```

Let us create a startup script

```
    cat > startup.sh
    chown 1000:root -R /work
```

We need to build the image and run the container

```
docker build -t nextjs .
docker run -it -p 3000:3000 -v $(pwd):/work nextjs
```

I developed a script that help me create a new project of nextjs or react with docker

```
run-next
```

The content is as follows:

```
docker run -it -p 3000:3000 -v ${PWD}:/work -w /work indamutsa/next-image:1.0.5 zsh
```

### Deployment

We are going to deploy our app to vercel

Install the vercel cli

```
yarn global add vercel
```

Check the version of vercel \

```
vercel --version
```
