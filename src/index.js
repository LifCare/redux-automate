import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { getUsersData } from "./epic";
import "./styles.css";

const epicMiddleware = createEpicMiddleware();
//const store = createStore(rootReducer);

const rootEpic = combineEpics(getUsersData);

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}

function Root() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <App />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
