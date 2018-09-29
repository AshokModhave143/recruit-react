import * as React from 'react';
import './App.css';

// Custom Components Import
import { Register } from "./components/Register/Register";
import { SideDrawer } from "./components/SideDrawer/SideDrawer";
import { Toolbar } from "./components/Toolbar/Toolbar";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        Main Container
        <Toolbar props={{}} />
        <SideDrawer props={{}} />
        <Register props={{}} />
      </div>
    );
  }
}

export default App;
