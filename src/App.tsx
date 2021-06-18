import React from "react";
import { observer } from 'mobx-react';

import appState from "./counterStore"
import "./index.css";
type StoreProps = {
  appState: Object
};
interface Props extends StoreProps {
  count:string,
  incCounter:Function,
  decCounter:Function,
}
export const App: React.FC<Props> = observer(({appState}) => (
  <div className="card">
    <h2> CLicks: {appState.count}</h2>
    <div className="button">
    <button onClick={appState.incCounter} >Increment</button>
    <button onClick={appState.decCounter} >Decrement</button>
    </div>

  </div>
));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { observer } from 'mobx-react';
// const App = observer(({ appState }) => {
//   return (
//     <div>
//       <button onClick={appState.incCounter} >Inc Counter</button>
//       <button onClick={appState.decCounter} >Dec Counter</button>
//     </div>
//   )
// })
// export default App
