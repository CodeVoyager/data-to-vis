This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Available Scripts](#available-scripts)
  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run coverage](#npm-run-coverage)
- [The Process](#the-process)
- [The Result](#the-result)
  - [Pros](#pros)
  - [Cons](#cons)
- [Future improvements](#future-improvements)


## Available Scripts

### `npm install`

Installs all required packages.
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
### `npm run coverage`

Launches the test runner and shows summary of code coverage.

## The Process

I've started my work on this task by writing down on a piece of paper what this little app should do:

- Give user sets of input to fill
- Give user submit button
- Fetch data from server
- Show line graph of fetched data (Bitcoin price index in given time)
- Give user some kind of interactivity (when user hovers on graph, user can see details namely date and price)

what data will be maintained:

- start date
- end date
- available currencies list
- selected currency
- count of active loading processes
- fetched data

what component will be created:

- App
- Chart
- Loader

what tools I'll use:

- ES6 / ES2015
- create-react-app (for fast bootstraping)
- react (simple and elegant UI dev)
- redux (simple and elegant tool for state maintain)
- d3 (tool designed for data visualisation with which I've already worked)
- ramda (for realiable data manipulation)
- jest for testing (prepackaged with create-react-app, fast, has snapshot comparing functionality)
- misc tools for polyfills (Promise)

I've assumed that:

- I'll utilize TDD approach
- I'll cover as much code with test as I can
- I'll code parts of app responsible for data maintain first and UI representation and interactions next
- I'll leave styling for last to work with clear, tested structure

Since I'm using Redux, I'll:

- use only action functions to which I'll pass needed data. Not creating action object for dispatch will mean tha if anything will change in action object structure I'll need only to update it in only one place. Those action also can be tested separately and I can rely on those functions. Those action will be kept in separate `actions` catalog. In this catalog I'll add `index.js` file which will export all actions in one object. In result: only one import statement in `App.js`.
- use only selectors for getting data from state object. For all reason stated above. And also I'll create `selectors` catalog also with `index.js` file. In result: only one import statement in `App.js`.
- use seperate reducers for different parts of state. Easier for seperate testing.  And also I'll create `reduceers` catalog also with `index.js` file. But in this file all imported reducers are combined with `combineReducers` as default export. If any reducer will be added/removed I'll need to update only `index.js` file and `store` file can be left untouched.
- create seperate catalog for store. For possible further changes.

Component assumptions:

- Componets should be stateless
- Componets should functional preferably
- All date comes form store and components are wraped with `connect` function


## The result

### Pros:

- Code is well separated and testable
- Planned project scope was achieved
- Usage of real DOM was minimized
- A good chunk of code is covered with tests
- Codebase gives can be expanded easily

### Cons:

- For such small project codebase is quite large
- Graph component have it's own small state. If was handling it's state in app state it would be coupled with rest of app and I wanted avoid that. So I've made this small compromise.
- Some part of code is left without tests. (`api/index.js`, `index.js`)
- Graph interactivity can be lacking, some transistions could be added.

## Future improvements:

- Cover more code with test
- `Graph` component could be moved to separate catalog and renamed `LineGraph`. This catalog could have `index.js` files which could export on component which could accept one addiontional parameter called `type`. Based on `type` property it could return specific Component and pass down other properties. It could also return one object with all available Graph components. Just for flexible interface.
- Adding transitions to Graph
- Adding brushing to Graph for easier data selection