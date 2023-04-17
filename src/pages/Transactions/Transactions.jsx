import React, { Component } from "react";

import UserScroll from "../../js/UserScroll";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";

export class Transaction extends Component {
  componentDidMount() {
    ProgressHeightWidth();
    UserScroll();
  }
  render() {
    return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Transactions</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div class="breadcrumb-item">
                <a href="#">Transactions</a>
              </div>
              <div class="breadcrumb-item">My Transactions</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">My Transactions</h2>
            <p class="section-lead">
              Components relating to my Transactions.
            </p>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-primary">
                  <i className="far fa-user"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>You Owe</h4>
                  </div>
                  <div className="card-body">10</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="card card-statistic-1">
                <div className="card-icon bg-danger">
                  <i className="far fa-newspaper"></i>
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>You are owed </h4>
                  </div>
                  <div className="card-body">42</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h4>Transactions</h4>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled list-unstyled-border">
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-1.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right text-primary">Now</div>
                        <div className="media-title">Nayan Jain</div>
                        <span className="text-small text-warning">
                          You are owed $500.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-2.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right">12m</div>
                        <div className="media-title">Siddhi Wadgaonkar</div>
                        <span className="text-small text-success">
                          You owe $50.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-3.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right">17m</div>
                        <div className="media-title">Rizal Fakhri</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                    <li className="media">
                      <img
                        className="mr-3 rounded-circle"
                        width="50"
                        src="../assets/img/avatar/avatar-4.png"
                        alt="avatar"
                      />
                      <div className="media-body">
                        <div className="float-right">21m</div>
                        <div className="media-title">Alfa Zulkarnain</div>
                        <span className="text-small text-muted">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center pt-1 pb-1">
                    <a href="#" className="btn btn-primary btn-lg btn-round">
                      View All
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </section>
      </div>
    );
  }
}

export default Transaction;
