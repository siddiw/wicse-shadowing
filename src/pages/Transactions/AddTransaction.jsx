import React, { Component } from "react";
import AdvanceForm from "../../js/FormAdvanced";


const paidby = [
  { name: 'Me' },
  { name: 'Nayan' }
];

const sharewith = [
  { name: 'Nayan' },
  { name: 'B' }
];

function handleSubmit() {
  window.location = '/transactions/mytransactions';
};

export class AddTransaction extends Component {
  state = {
    paidby: false,
    sharewith: false,
  }
  toggle = () => this.setState((currentState) => ({paidby: !currentState.show}));

  toggleshare = () => this.setState((currentState) => ({sharewith: !currentState.show}));


  render() {
    return (
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Add New Transaction</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Transactions</a>
              </div>
              <div className="breadcrumb-item">Add New Transaction</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Add a new Transaction with your Friends</h2>
            <p className="section-lead">
              Add transaction with friend(s) and decide your share..
            </p>

            <div className="row">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="form-group">
                      <label>Paid By</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                          <i className="fas fa-search"></i>
                          </div>
                        </div>
                        <input type="text" className="form-control currency" onClick={this.toggle}/>
                      </div>
                      <div className="search-result">
                    {this.state.paidby && 
                    
                    <div> {paidby.map(item => (
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
                    <div className="form-group">
                      <label>Share With</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                          <i className="fas fa-search"></i>
                          </div>
                        </div>
                        <input type="text" className="form-control currency" onClick={this.toggleshare}/>
                      </div>
                      <div className="search-result">
                    {this.state.sharewith && 
                    
                    <div> {sharewith.map(item => (
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
                    <div className="form-group">
                      <div className="control-label">Share Percentage</div>
                      <div className="custom-switches-stacked mt-2">
                        <label className="custom-switch">
                          <input
                            type="radio"
                            name="option"
                            value="1"
                            className="custom-switch-input"
                            defaultChecked
                          />
                          <span className="custom-switch-indicator"></span>
                          <span className="custom-switch-description">
                            You paid, Split equally
                          </span>
                        </label>
                        <label className="custom-switch">
                          <input
                            type="radio"
                            name="option"
                            value="2"
                            className="custom-switch-input"
                          />
                          <span className="custom-switch-indicator"></span>
                          <span className="custom-switch-description">
                          You are owed the full amount
                          </span>
                        </label>
                        <label className="custom-switch">
                          <input
                            type="radio"
                            name="option"
                            value="3"
                            className="custom-switch-input"
                          />
                          <span className="custom-switch-indicator"></span>
                          <span className="custom-switch-description">
                          Other paid, Split equally
                          </span>
                        </label>
                        <label className="custom-switch">
                          <input
                            type="radio"
                            name="option"
                            value="4"
                            className="custom-switch-input"
                          />
                          <span className="custom-switch-indicator"></span>
                          <span className="custom-switch-description">
                          Other is owed the full amount
                          </span>
                        </label>
                      </div>
                   
                  </div>
                  <div className="card-footer text-center">
                      <button className="btn btn-primary" type="submit" onClick={() => handleSubmit()}>
                      Submit </button>
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

export default AddTransaction;
