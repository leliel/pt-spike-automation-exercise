# Getting Started

## Purpose

This document will guide you through getting started with the automation tests for `automationexercise.com` a component of the parts trader tech test.

## Getting the Latest Code

The latest code can be rerieved with git. 
```
git clone git@github.com:leliel/pt-spike-automation-exercise.git
```

## Setting Up the Environment

Verify that npm is installed and up to date
```
npm --version
```

if necessary install npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Setup your `.env` file:

```
baseURL=https://automationexercise.com/
userPassword=D3v3nv1r0m3nt
ci=false
```
baseURL points to the environment to run tests against.
userPassword contains the well known default password to use for users in the environment
ci=false disables some strict checks by playwright in CI environments.

run `npm install` to install dependencies
run `npx playwright install --with-deps`to download the playwright packaged browsers and any missing dependencies. 

## Running the Tests

Tests can be executed with 
```
npm run tests
```


## Additional Details

vscode is strongly recommended as an IDE for playwright based testing due to the excellent playwright plugin.

---

## Links

[README](README.md) | [EXERCISE](EXERCISE.md) | [ISSUES](ISSUES.md) | [FEEDBACK](FEEDBACK.md)