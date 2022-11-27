import React, { Component } from "react";
import "../common/stylesheets/Home.css";

export default class Home extends Component {
  render() {
    return (
      <>
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

          {/*  Here starts the Statistics Area */}
          <center>
            <div className="stats">
              <hr />
              <div className="titles">
                <span>Earning</span>
                <span>DAR Status</span>
              </div>
              <div className="values">
                <span id="earning">₹ 2160</span>
                <span id="dar">
                  <span id="completed">9</span>&nbsp; Completed &nbsp;&nbsp;
                  <span id="upcoming">0</span>&nbsp; Upcoming
                </span>
                <span id="target">Total Target Aug 1456 Task</span>
              </div>
              <hr />
            </div>
          </center>
        </div>
        <div className="bottom">
          <div className="title2">
            Today's Attendance
            <span id="today">Present</span>
            <span id="per">65%</span>
          </div>
          <div className="bar">
            <div className="percent"></div>
          </div>
          <div className="values">
            <span id="dar">
              <span id="present">9</span> Present
              <span id="absent">0</span> Absent
              <span id="leave">0</span> Leave
            </span>
          </div>
        </div>
      </>
    );
  }
}
