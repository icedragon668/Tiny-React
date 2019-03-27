import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12">
                <h2>
                    Kudos are candy not compliments
                    <span className="right" href="#">Home</span>
                </h2>

                <hr/>
            </div>
        </div>
        );
  }
}

export default Header;
