// @ts-check

import React from 'react'
import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex'
import {dracula} from './theme'
import './App.css';


const test = stylex.create({
  base: {
    backgroundColor: colors.background,
    height: 300,
    width: 400
  }
})

/**
* @typedef {Object} test
* @property {string} [testProp] - Test prop
*/

/**
* @typedef {Object} Care
* @property {string} bla  - Test prop
* @property {number} test - Test prop
*/

/**
 * @typedef {test & Care} Bozo
 */

/**
 * The Test
 * @param {Bozo} Care
*/
const Test = ({bla, test})=> {
  const y = test
  return bla 
}
const give = () => {

  return Test({bla: '32',test: 32, })
}

function App() {

  return (
    <div>
      <div {...stylex.props(dracula,test.base)} />
      <h1>Hello </h1>
    </div>
  );
}

export default App;
