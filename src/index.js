// In React, this is the FIRST file that will be executed when running in the browser, 
// unlike in Native Javascript where the "index.html" file is the first to be executed and then the rest.

import ReactDOM from 'react-dom';


import './index.css'; // for css files we keep the ".css" 
import App from './App'; // we ommit the ".js" when importing javascript files

// This references the "App.js" component, which has all the other components that we created, nested in.
// We only render the "App.js" (root). Other components will be rendered through the "App.js" file which has all the 
// other components nested in.
ReactDOM.render(<App />, document.getElementById('root'));