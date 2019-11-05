This is an example application to showcase the very basics of Redux.

## Redux Basics

### `What is Redux?`

First, Redux isn't React specific.  Redux can be used in conjunction with other libraries such as Angular and Ember.   

Redux allows you to centralize your application's state.  What this means is there is a global state that any component can have access to.

> From redux.js.org: <br/><br/>
As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.

### `Terminology`

**Store** - the globalized state.<br/>
```
const store = createStore(allReducer);
```
**Action** - this describes what you want to do.  In this sample application, I want to increment and decrement the counter state property.<br/>
```
export const increment = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};
```

> *type* is the standard for the action name.  Another property of the Object being returned is *payload*, which can accept a parameter and then do something with it in the reducer
using ***action.payload***.

**Reducer** - describes how the actions transform the state.  It takes two arguments, the default state, and the action.<br/>
```
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
```
**Dispatch** - executes the Action.
```
<button onClick={() => dispatch(increment())}>+</button>
<button onClick={() => dispatch(decrement())}>-</button>
```

### `Overview`

You won't mutate the state directly, but instead you specify the mutations you want to happen with plain objects called **actions**.  Then you write the **reducer** to decide how every action transforms the application's state.

So when we Dispatch an Action, it gets sent to the Reducer, which updates the Store.


