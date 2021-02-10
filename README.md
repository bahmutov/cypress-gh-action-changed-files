# cypress-gh-action-changed-files
> Shows how to run different Cypress projects depending on changed files

This monorepo shows how to run Cypress tests using [cypress-io/github-action](https://github.com/cypress-io/github-action) for each application depending on the changed files. See the workflow files for details and read [How to Test Monorepo Apps Using Cypress GitHub Action](https://glebbahmutov.com/blog/test-monorepo-apps/)

App | Workflow | CI status | Description
---|---|---|---
[app-a](./apps/app-a) | [app-a.yml](./.github/workflows/app-a.yml) | [![a ci]][a ci url] | A very simple HTML site that can be served right from `index.html` file
[app-b](./apps/app-b) | [app-b.yml](./.github/workflows/app-b.yml) | [![b ci]][b ci url] | Simple site with its own server
[app-c](./apps/app-c) | [app-c.yml](./.github/workflows/app-c.yml) | [![c ci]][c ci url] | A Next.js Single Page Application

[a ci]: https://github.com/bahmutov/cypress-gh-action-changed-files/workflows/app-a/badge.svg?branch=main
[a ci url]: https://github.com/bahmutov/cypress-gh-action-changed-files/actions

[b ci]: https://github.com/bahmutov/cypress-gh-action-changed-files/workflows/app-b/badge.svg?branch=main
[b ci url]: https://github.com/bahmutov/cypress-gh-action-changed-files/actions

[c ci]: https://github.com/bahmutov/cypress-gh-action-changed-files/workflows/app-c/badge.svg?branch=main
[c ci url]: https://github.com/bahmutov/cypress-gh-action-changed-files/actions
