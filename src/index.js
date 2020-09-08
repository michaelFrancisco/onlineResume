import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import Resume from 'react-awesome-resume'

const myJSONResume = require('./person.json')
console.log('myJSONResume: ')
console.log(myJSONResume)

ReactDOM.render(
  <Resume jsonResume={myJSONResume} theme={"default"} inline={false} />,
  document.getElementById("root")
);
serviceWorker.unregister();
