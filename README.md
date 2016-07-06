# react-non-spa-example
Non-SPA React application example

## Installation

```
$ npm install
```

## Commands
```sh
# Development
$ npm run dev 

# Production build
$ npm run build
```

## Usage

Webpack will bundle files separately by constant that declared on [`ENTRIES`](https://github.com/incleaf/react-non-spa-example/blob/master/webpack.config.js#L6) in [`webpack.config.js`](https://github.com/incleaf/react-non-spa-example/blob/master/webpack.config.js).

I implemented render function in [`src/utils/render`](https://github.com/incleaf/react-non-spa-example/blob/master/src/utils/render.js) to isolate entry component from the store 
which will be used on entry component.
If you declare entry component and create store at the same time in entry file, React Hot Loader will not work correctly.

Note that this repository is one way of build a Non-SPA React Application, not a best way.

## Dependencies

- React
- Redux
- Webpack
- Gulp
- [and more...](https://github.com/incleaf/react-non-spa-example/blob/master/package.json)

## TODO

- Build Process
- Webpack Chunk
