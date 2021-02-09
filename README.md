# cypress-gh-action-changed-files
> Shows how to run different Cypress projects depending on changed files

App | Workflow | CI status
---|---|---
[app-a](./apps/app-a) | [app-a.yml](./.github/workflows/app-a.yml) | [![a ci]][a ci url]
[app-b](./apps/app-b) | [app-b.yml](./.github/workflows/app-b.yml) | [![b ci]][b ci url]
[app-c](./apps/app-c) | [app-c.yml](./.github/workflows/app-c.yml) | [![c ci]][c ci url]

[a ci]: https://github.com/bahmutov/cypress-gh-action-changed-files/workflows/app-a/badge.svg?branch=main
[a ci url]: https://github.com/bahmutov/cypress-gh-action-changed-files/actions

[b ci]: https://github.com/bahmutov/cypress-gh-action-changed-files/workflows/app-b/badge.svg?branch=main
[b ci url]: https://github.com/bahmutov/cypress-gh-action-changed-files/actions

[c ci]: https://github.com/bahmutov/cypress-gh-action-changed-files/workflows/app-c/badge.svg?branch=main
[c ci url]: https://github.com/bahmutov/cypress-gh-action-changed-files/actions
