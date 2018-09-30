import * as React from 'react';
import './App.css';

// Custom Components Import
import { Backdrop } from "./components/Backdrop/Backdrop";
import { Menubar } from "./components/Menubar/Menubar";
import { RegisterForm } from "./components/Register/RegisterForm";
import { SideDrawer } from "./components/SideDrawer/SideDrawer";

class App extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
      user: {
        firstName: "John",
        lastName: "Smith",
        role: "Manager"
      }
    };
  }

  public drawerToggleClickHandler = () => {
    this.setState((prevState: any) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  };

  public backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  public closeSideDrawer = () => {
    this.backdropClickHandler();
  };

  public render() {
    let sideDrawer: any;
    let backDrop: any;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer show={this.state.sideDrawerOpen} closeDrawer={this.closeSideDrawer} />;
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{height: '100%'}}>
        <Menubar 
          drawerClickHandler={this.drawerToggleClickHandler} 
          user={this.state.user}/>
        {sideDrawer}
        {backDrop}
        <main style={{marginTop: '65px'}}>
          <RegisterForm user={this.state.user}/>
        </main>
      </div>
    );
  }
}

export default App;
