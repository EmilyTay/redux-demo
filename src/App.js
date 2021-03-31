import './App.css';
import Navbar from './components/Navbar.js'
import SitesTable from './components/SitesTable.js'
import React, {Component} from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render() {
    return (
    <div className="App">
      isLoggedIn: {this.state.isLoggedIn ? "Yes" : "No"}
      <Navbar handleLoginClick={() => this.handleLoginClick()} isLoggedIn={this.state.isLoggedIn}></Navbar>
      <SitesTable isLoggedIn={this.state.isLoggedIn}></SitesTable>
    </div>
    )
  }
}
