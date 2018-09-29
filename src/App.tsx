import * as React from 'react';
import './App.css';

// Custom Components Import
import { Backdrop } from "./components/Backdrop/Backdrop";
import { Menubar } from "./components/Menubar/Menubar";
import { Register } from "./components/Register/Register";
import { SideDrawer } from "./components/SideDrawer/SideDrawer";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Menubar props={{}} />
        <SideDrawer props={{}} />
        <Backdrop props={{}} />
        <main className="App-main">
          <Register props={{}} />
        </main>
      </div>
    );
  }
}

export default App;
