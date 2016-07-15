// var x = [1,2,3,4,5];
// var y = [6,7];
// var z = [...x,...y];
// console.log(z);

var Redux = require('redux');
var TodoApi = require('../../src/api/TodoApi.js');

var reducer = function(state = {name: 'Anonymous', age: 29}, action){
debugger;
  switch(action.type){
    case 'CHANGE_NAME':
      console.log('action: CHANGING_NAME');
      state = Object.assign({}, state, {name:action.name});
    default:
      return state;
  }
}

var store = Redux.createStore(reducer);
var currentState = store.getState();

console.log('currentState', currentState);

//create & dispatch action
var action = {
  type: 'CHANGE_NAME',
  name: 'Lance'
};
store.dispatch(action);

//display new state
var currentState = store.getState();
console.log('currentState', currentState);
