# Start with React Manually

## first commands

1. ``mkdir public src``
2. ``touch public/index.html src/index.js src/App.js``
3. ``npm i react react-dom react-scripts``

### react-dom

1. React client => create Root component this will dealing with react element inside index.html
const root = createRoot(container)
root.render(element)
2. React Server

### react-scripts

> In programming, a script is a list of instructions that dictates what to do to another program; React is no exception.

* In React apps, scripts are located in the package.json file’s script section

#### start => React uses Node.js on development to open the app on <http://localhost:3000>, thus the start script enables you to start the webpack development server

``npm start``

#### test => Create React App uses Jest as a test runner. The test script enables you to launch the test runner in interactive watch mode that lets you control Jest with your keyboard.

``npm test``

#### build => React is modular, which is why you can create several files or components if you want to.These separate files need to be merged or bundled into one, to be precise. That’s one of the major benefits of the build script.The other is performance, And React uses the build script to ensure that the finished project is bundled, minified, and optimized with best practices for deployment

``npm run build``

#### eject => Running the eject script will remove the single build dependency from your project

``npm run eject``

* you can change the development server port with the PORT environment variable
``PORT=5000 yarn start``
``PORT=5000 npm start``

##### StrictMode is a React Developer Tool primarily used for highlighting possible problems in a web application
