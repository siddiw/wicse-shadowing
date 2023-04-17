import React, { Component } from "react";

import UserScroll from "../../js/UserScroll";
import ProgressHeightWidth from "../../js/ProgressHeightWidth";

export class MyFriends extends Component {
  componentDidMount() {
    ProgressHeightWidth();
    UserScroll();
  }
  render() {
    return (
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Friends</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div class="breadcrumb-item">
                <a href="#">Friends</a>
              </div>
              <div class="breadcrumb-item">My Friends</div>
            </div>
          </div>

          <div class="section-body">
            <h2 class="section-title">My Friends</h2>
            <p class="section-lead">
              Components relating to users, lists of users and so on.
            </p>

            
            <div class="row">
              
              <div class="col-12 col-sm-12 col-lg-6">
                  {/* <div class="card-header">
                    <h4>User Details</h4>
                  </div> */}
                  {/* <div class="table"> */}
                  <div class="col-12 col-md-6 col-lg-6">
                    <ul class="list-unstyled user-details list-unstyled-border list-unstyled-noborder">
                      <li class="media">
                        <img
                          alt="image"
                          class="mr-3 rounded-circle"
                          width="50"
                          src="../assets/img/avatar/avatar-1.png"
                        />
                        <div class="media-body">
                          <div class="media-title">Nayan Jain</div>
                          <div class="text-job text-muted">Web Developer</div>
                        </div>
                        <div class="media-items">
                          <div class="media-item">
                            <div class="media-value">1,239</div>
                            <div class="media-label">Posts</div>
                          </div>
                          <div class="media-item">
                            <div class="media-value">10K</div>
                            <div class="media-label">Followers</div>
                          </div>
                          <div class="media-item">
                            <div class="media-value">2,312</div>
                            <div class="media-label">Following</div>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <img
                          alt="image"
                          class="mr-3 rounded-circle"
                          width="50"
                          src="../assets/img/avatar/avatar-5.png"
                        />
                        <div class="media-body">
                          <div class="media-title">Mandar Palkar</div>
                          <div class="text-job text-muted">Web Developer</div>
                        </div>
                        <div class="media-items">
                          <div class="media-item">
                            <div class="media-value">4,872</div>
                            <div class="media-label">Posts</div>
                          </div>
                          <div class="media-item">
                            <div class="media-value">43K</div>
                            <div class="media-label">Followers</div>
                          </div>
                          <div class="media-item">
                            <div class="media-value">1,290</div>
                            <div class="media-label">Following</div>
                          </div>
                        </div>
                      </li>
                      <li class="media">
                        <img
                          alt="image"
                          class="mr-3 rounded-circle"
                          width="50"
                          src="../assets/img/avatar/avatar-4.png"
                        />
                        <div class="media-body">
                          <div class="media-title">Sagar Parikh</div>
                          <div class="text-job text-muted">Web Developer</div>
                        </div>
                        <div class="media-items">
                          <div class="media-item">
                            <div class="media-value">1,821</div>
                            <div class="media-label">Posts</div>
                          </div>
                          <div class="media-item">
                            <div class="media-value">14K</div>
                            <div class="media-label">Followers</div>
                          </div>
                          <div class="media-item">
                            <div class="media-value">2,891</div>
                            <div class="media-label">Following</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MyFriends;
