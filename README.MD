# Voltagene SRL - Public Website Repository

## Documentation

### Quick tip

> The projects use Vercel CLI to import hidden files.
In const folder, we can see there is a "const-example.tsx", the reason of this is because we are hiding the actual const.tsx which contain commercial secrets

To run a project which hides files with .gitignore, we decided to use vercel CLI. Following the instructions, we first install the CLI

```shell
npm install -g vercel
```

Then, we setup the project to connect it with vercel

```shell
# First, you need to log in your vercel account with the CLI
vercel --login
# Then, connect your project with vercel
vercel --prod
```

This website is used by Voltagene SRL, made with Next.Js 15.1.7 - TypeScript, for the style we opted for Tailwind CSS.

To initialize the project you need npm and node.js Version 20.18.2+

In the terminal run the command:

```shell
npm i
```

Then after the installation of the dependencies, run:

```shell
npm run dev
```

Feel free to customize the scripts in package.json

> If you got any question, ask for @InuzDev

On Going chores

- sales page
- Security measures for DDoS and DoS attack.

Project chores list

- Create About us section
