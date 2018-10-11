import React, { Component } from "react";
import "./SideNav.css";
import SearchBar from "../SearchBar";
import SearchResult from "../SearchResult";

class SideNav extends Component {


  handleUserLogout = event => {
    event.preventDefault()
    window.location.replace("http://localhost:3000/")
    console.log("log me out")
    sessionStorage.clear()
    sessionStorage.setItem("logout", "hidden")
    sessionStorage.setItem("signin", "")
    sessionStorage.setItem("signup", "")
    sessionStorage.setItem("list", "hidden")

  }


  render() {
    return (
      <div className="SideNav animated fadeInLeftBig delay-1s">
        <ul>

          <li>
            <a className="small material-icons modal-trigger tooltipped" href="#modal2" id="person_add" data-position="right" data-tooltip="add friend">person_add</a>
            <div id="modal2" className="modal modal-fixed-footer">
            <div className="modal-content">
              <h4>Add Friend</h4>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Done</a>
            </div>
          </div>
          </li>

          <li>
            <a className="small material-icons tooltipped" href="##" id="chat" data-position="right" data-tooltip="Chat">chat</a>
          </li>

          <li>
            <a className="small material-icons tooltipped" href="##" id="exit" onClick={this.handleUserLogout} data-position="right" data-tooltip="Log Out">exit_to_app </a>
          </li>

        </ul>
      </div>
    )
  }
}



export default SideNav;