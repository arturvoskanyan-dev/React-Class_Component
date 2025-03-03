import React, { Component } from 'react'
import MainItem from "../MainItem/MainItem"
import "./Main.css"

export default class Main extends Component {
  render() {
    return (
        <main>
            <div className="container">
                <div className="main-box">
                    <MainItem data={this.props.data} />
                </div>
            </div>
        </main>
    )
  }
}
