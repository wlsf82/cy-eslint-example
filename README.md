# cy-eslint-example

[![ESLint](https://github.com/wlsf82/cy-eslint-example/actions/workflows/ci.yml/badge.svg)](https://github.com/wlsf82/cy-eslint-example/actions)

Sample project to demonstrate the rules of [`eslint-plugin-cypress`](https://www.npmjs.com/package/eslint-plugin-cypress).

___

## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/downloads) (I've used version `2.34.1` while writing this doc)
- [Node.js](https://nodejs.org/en/) (I've used version `v18.13.0` while writing this doc)
- npm (I've used version `8.19.3` while writing this doc)

**Note:** When installing Node.js, npm is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Running the static code analysis

To run the EcmaScript static code analysis, run `npm run lint`.

> Below is an example of some linting issues.

```sh
   7:5   error    Do not assign the return value of a Cypress command                                                                                                                  cypress/no-assigning-return-values
   7:11  error    'heading' is assigned a value but never used                                                                                                                         no-unused-vars
   7:21  warning  use data-* attribute selectors instead of classes or tag names                                                                                                       cypress/require-data-selectors
  11:5   error    Do not wait for arbitrary time periods                                                                                                                               cypress/no-unnecessary-waiting
  14:3   error    Avoid using async functions with Cypress tests                                                                                                                       cypress/no-async-tests
  15:11  error    'heading' is assigned a value but never used                                                                                                                         no-unused-vars
  15:27  warning  use data-* attribute selectors instead of classes or tag names                                                                                                       cypress/require-data-selectors
  19:5   error    It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  19:5   warning  use data-* attribute selectors instead of classes or tag names                                                                                                       cypress/require-data-selectors
  25:5   warning  use data-* attribute selectors instead of classes or tag names                                                                                                       cypress/require-data-selectors
  26:5   error    Do not use force on click and type calls                                                                                                                             cypress/no-force
  26:5   warning  use data-* attribute selectors instead of classes or tag names                                                                                                       cypress/require-data-selectors
  30:5   error    Make an assertion on the page state before taking a screenshot                                                                                                       cypress/assertion-before-screenshot
  34:5   warning  use data-* attribute selectors instead of classes or tag names                                                                                                       cypress/require-data-selectors
  38:5   error    Do not use cy.pause command                                                                                                                                          cypress/no-pause

✖ 15 problems (9 errors, 6 warnings)

```

## Support this project

To support this project, leave a ⭐.

___

Made with ❤️ by [Walmyr](https://walmyr.dev).
