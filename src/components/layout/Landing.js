import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      
      <div style={{ marginTop: "4rem" }} class="center-align">
        <div className="row" >
          <div className="col s12">
            <h4>
              <b>Welcome </b>
            </h4>
            <p className="flow-text grey-text text-darken-1">
             Listen to music with a single click
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn-floating btn-large waves-effect waves-light hoverable blue accent-3 lime-text text-lighten-2" 
              >
                <b>Register</b>
              </Link>
            </div>
            <div className="col s6">
              <Link 
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn-floating btn-large waves-effect waves-light 
                hoverable green accent-3 yellow-text text-accent-1" 
              >
                <b>Log In</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
