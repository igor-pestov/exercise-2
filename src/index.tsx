import React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import appState from './counterStore';

import {App} from "./App";

import "./index.css";

const rootElement = document.getElementById("app");

render(
    <App appState={appState}/>,
  rootElement
);
