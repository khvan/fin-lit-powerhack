import React, {Component} from 'react';

class Solution extends Component {
  renderCard () {
    for (let i = 0; i < 4; i++) {
      return (
        <div>
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Based on your answers
                </p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          </div>

        </div>
      );
    }
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          {this.renderCard ()}
        </div>
      </div>
    );
  }
}

export default Solution;
