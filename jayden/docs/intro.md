---
sidebar_position: 3
---

# Docusaurus Tutorial
## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Getting Started

Get started by **creating a new site**.

**Step 1**: Creating a work directory to store the docusaurus files. The directory can be created by using the command below:
```bash
mkdir work
```
**Step 2**: After creating the directory, you need to create a docusaurus file inside the directory that you created previously.
```bash
npx create-docusaurus@latest my-website classic
```
:::tip

You can change the 'my-website' into the name you prefer.

:::

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

The `npm run build` and `npm run serve` commands, enable the user to build and start the website manually.
