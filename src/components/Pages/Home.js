import React, { Component } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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

          <div className="center">
            <div className="left">
              <div id="total">
                <CircularProgressbar
                  value={69}
                  text={`12 Total Tasks`}
                  styles={buildStyles({
                    textSize: "80%",
                    textColor: "#555555",
                    pathColor: "#009788",
                  })}
                />
              </div>
            </div>
            <span className="black"></span>
            <div className="right">
              <center>
                <div className="status">
                  <div id="curr">
                    <div id="prog">
                    <CircularProgressbar
                      value={50}
                      text={`09`}
                      styles={buildStyles({
                        rotation:'0.3',
                        textSize: "200%",
                        textColor: "#555555",
                        pathColor: "#009788",
                      })}
                    ></CircularProgressbar></div>
                    <div id="stat">
                      <span id="head">COMPLETE</span>
                      <span>09 Task</span>
                    </div>
                  </div>
                  <div id="curr">
                    <div id="prog">
                    <CircularProgressbar
                      value={50}
                      text={`12`}
                      styles={buildStyles({
                        rotation:'0.3',
                        textSize: "200%",
                        textColor: "#555555",
                        pathColor: "#2c6be3",
                      })}
                    ></CircularProgressbar></div>
                    <div id="stat">
                      <span id="head">ONGOING</span>
                      <span>12 Task</span>
                    </div>
                  </div>
                  <div id="curr">
                    <div id="prog">
                    <CircularProgressbar
                      value={50}
                      text={`08`}
                      styles={buildStyles({
                        rotation:'0.3',
                        textSize: "200%",
                        textColor: "#555555",
                        pathColor: "#f19919",
                      })}
                    ></CircularProgressbar></div>
                    <div id="stat">
                      <span id="head">INACTIVE</span>
                      <span>08 Task</span>
                    </div>
                  </div>
                  <div id="curr">
                    <div id="prog">
                    <CircularProgressbar
                      value={50}
                      text={`03`}
                      styles={buildStyles({
                        rotation:'0.3',
                        textSize: "200%",
                        textColor: "#555555",
                        pathColor: "#c40030",
                      })}
                    ></CircularProgressbar></div>
                    <div id="stat">
                      <span id="head">PENDING</span>
                      <span>03 Task</span>
                    </div>
                  </div>
                </div>
              </center>
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
              <span id="present">22</span> Present
              <span id="absent">2</span> Absent
              <span id="leave">0</span> Leave
            </span>
          </div>
        </div>
      </>
    );
  }
}
