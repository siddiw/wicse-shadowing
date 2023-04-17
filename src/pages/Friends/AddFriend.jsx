import React, { Component } from "react";

const data = [
  { name: 'A' },
  { name: 'B' }
];

function handleSubmit() {
    window.location = '/friends/myfriends';
  };

export class AddFriend extends Component {
  state = {
    show: false,
  }
  toggle = () => this.setState((currentState) => ({show: !currentState.show}));

  
  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Add a Friend</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Friends</a>
              </div>
              <div className="breadcrumb-item">Add a Friend</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Add a Friend</h2>
            <p className="section-lead">
              Add a new friend
            </p>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Add a Friend</h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Search Users</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                          <i className="fas fa-search"></i>
                          </div>
                        </div>
                        <input type="text" className="form-control currency" onClick={this.toggle}/>
                      </div>
                    </div>
                    <div className="search-result">
                    {this.state.show && 
                    
                    <div> {data.map(item => (
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          // id="defaultCheck1"
                        />
                        <label
                          className="form-check-label"
                          // htmlFor="defaultCheck1"
                        >
                          {item.name}
                        </label>
                      </div>
                      // <p>{item.name}</p>
                    ))}
                    </div>
                    
                    
                    }
                  </div>
                  </div>

                  <div className="card-footer text-center">
                      <button className="btn btn-primary" onClick={() => handleSubmit()}>Add Friend</button>
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

export default AddFriend;
