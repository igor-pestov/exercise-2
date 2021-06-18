import { observable, action } from 'mobx';
// useStrict(true)

const appState = observable({
  count: 0,
  decCounter:action("dsd", function() {
    appState.count -= 1;
  }),
  incCounter: action(function () {
    appState.count += 1;
  })
})
export default appState;
// import { observable } from "mobx";

// export class CounterStore {
//   @observable counter: number = 0;
 
//   increment() {    
//     this.counter++;
//   }

//   decrement() {
//     this.counter--;
//   }
// }

// export default new CounterStore();
