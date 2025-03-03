import React, { Component } from 'react'
import NavItem from "./NavItem/NavItem"
import "./Nav.css"

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="container">
            <div className="nav-logo">
                <h1>BombShop</h1>
            </div>

            <NavItem nav={this.props.nav} />
            
            <div className="nav-search">
                <input type="text" />
            </div>
        </div>
      </nav>
    )
  }
}
