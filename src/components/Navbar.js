import React, { Component } from 'react';
import Identicon from 'identicon.js';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="http://www.dappuniversity.com/bootcamp"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Dapp University
            </a>
                <ul className="navbar-nav px-3">  {/* Starting point */}
                    <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                        <small className="text-secondary">
                            <small id="account">{this.props.account}</small> {/* UI web app */}
                        </small>
                        { this.props.account
                            ? <img 
                                className='ml=2'
                                width='30'
                                height='30'
                                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}>
                            </img> 
                            : <span></span>
                        }
                    </li>
                </ul> {/* Finished */}
            </nav>
        );
    }
}

export default Navbar; 