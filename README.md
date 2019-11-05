This is an example application to showcase the very basics of Redux.

## Redux Basics

### `What is Redux?`

First, Redux isn't React specific.  Redux can be used in conjunction with other libraries such as Angular and Ember.   

Redux allows you to centralize your application's state.  What this means is there is a global state that any component can have access to.

### `Terminology`

Store - the globalized state.<br/>
```
const store = createStore(allReducer);
```
Action - this describes what you want to do.  In this sample application, I want to increment and decrement the counter state property.<br/>
Reducer - describes how the actions transform the state.  It takes two arguments, the default state, and the action.<br/>
Dispatch - executes the Action.

So when we Dispatch an Action, it gets sent to the Reducer, which updates the Store.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
