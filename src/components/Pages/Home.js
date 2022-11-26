import React, { Component } from "react";
import "../common/stylesheets/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="console">
        {/*  Here lies the Top Heading of the webpage */}

        <div className="top">
          <div className="left">
            <span className="orange"></span>
            <div className="text">
              <span className="head">My Task List</span>
              <span className="date">Aug 2022</span>
            </div>
          </div>
          <div className="right">
            Self-Shielded open arc continuous wire with high resistance to
            friction and compression, suitable for multilayer build-up.
          </div>
        </div>

        {/*  Here starts the Center of the console - the progress circles */}

        <div>
          <div class="circle-wrap">
            <div class="circle">
              <div class="mask half">
                <div class="fill">
                  <div class="mask full">
                    <div class="fill">
                    <div class="inside-circle"> 12 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
