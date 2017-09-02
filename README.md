# Express Template

A template for node.js/express applications written in TypeScript

## Features

* TypeScript
* `tslint`
* e2e- and unit tests with `mocha`


## Setup

```bash
$ npm install -g grunt-cli
$ npm install
```

## Usage

During development, use `npm run watch` to keep transpiling,
linting and restarting your express app whenever a file is saved.

Before committing, use `npm run precommit` to check if your code builds
and to iron out any tslint errors

Use `npm run ci` to do a clean npm install as well as build, lint
and run tests for your application.
