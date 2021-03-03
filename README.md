[![Netlify Status](https://api.netlify.com/api/v1/badges/2830cee0-a304-41bf-bf26-5540de703090/deploy-status)](https://app.netlify.com/sites/plasmic-gatsby-starter-blog/deploys)

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.plasmic.app">
    <img alt="Plasmic" role="img" src="https://cdn-images-1.medium.com/max/176/1*D1nV2o_le9dJEO3G80P4xg@2x.png" width="120">
  </a>
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Plasmic+Gatsby starter
</h1>

Kick off your project with this boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.
## Demo

[https://plasmic-gatsby-starter-blog.netlify.app](https://plasmic-gatsby-starter-blog.netlify.app)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the starter repo,
    and navigate to the new project.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new my-site https://github.com/plasmicapp/gatsby-starter
    cd my-site/
    ```

1. **Authenticate with Plasmic**

    Run the following to authenticate your system

    ```bash
    npx -p @plasmicapp/cli plasmic auth
    ```

1. **Clone a Plasmic project starter**

    Log into [Plasmic](https://studio.plasmic.app/),
    click on "New Project",
    and clone one of the starter projects into your own workspace.
    We recommend the "Starter Blog" project.

    ![dashboard](https://docs.plasmic.app/static/new-project-modal-20e03cbd03100f253f484cfc6b1b9f31.png)

    When you do, note the `PROJECT_ID` in the URL (e.g. `https://studio.plasmic.app/projects/PROJECT_ID`).
    Please check that you have write-access to the project,
    otherwise you may be referencing read-only components.

    _Note: This should work with any other website template, but you may need to delete `containerContents` in `index.js`. This relies on `ListItem`, which only exists for the Starter Blog._

1. **Configure PlasmicLoader.**

    Open `gatsby-config.js` and update the plugin configuration for `@plasmicapp/loader`
    with the project ID of your Plasmic project.

    Note: You may see a pre-existing project in the config that needs to be replaced.

    ```js
    {
      resolve: `@plasmicapp/loader/gatsby`,
      options: {
        projects: ["PROJECT_ID"], // An array of project to sync.
      },
    },
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


## Learning Plasmic

- Full Plasmic documentation lives at our [learning portal](https://www.plasmic.app/learn/).
- **For most developers, we recommend starting with our [quickstart](https://www.plasmic.app/learn/quickstart/).

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

### To deploy with Netlify

We already have a default `netlify.toml` config file for you.
Remember to go into your Netlify project settings and set the following environment variables:
- PLASMIC_AUTH_USER
- PLASMIC_AUTH_TOKEN

<!-- AUTO-GENERATED-CONTENT:END -->

## Troubleshooting

If your build is failing, try the following:

- Were any component/slot/variant names changed? Check the 2 following files to see how Plasmic is wired up to the rest of the application:
  - [./src/pages/index.js](./src/pages/index.js)
  - [./src/templates/blog-post.js](./src/templates/blog-post.js)

