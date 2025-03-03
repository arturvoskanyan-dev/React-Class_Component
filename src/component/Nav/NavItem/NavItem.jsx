import React, { Component } from 'react'
import "./NavItem.css"

export default class NavItem extends Component {
  render() {
    return (
        <div className="nav-items">
            {
                this.props.nav.map((elem, index) => {
                    return (
                        <div className="nav-item" key={index}>
                            <a href="">{elem}</a>
                        </div>
                    )
                })
            }
      </div>
    )
  }
}
