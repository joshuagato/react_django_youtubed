import React, { Component } from 'react';
import './Header.scss';

import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faMenu } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faMenu } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch, faUpload, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export class Header extends Component {

  homeHandler = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="header-div">
        <div className="menu-icon-group">
          <div onClick={this.props.showhide} title="Double click to show/hide sidebar" className="menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div onClick={this.homeHandler} className="icon">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <button type="button"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        <div className="other-options">
          <span className="upload-video" title="Upload Video"><FontAwesomeIcon icon={faUpload} /></span>
          <span className="sign-in" title="Login Here"><FontAwesomeIcon icon={faSignInAlt} /></span>
          <span className="sign-up" title="Login Here"><FontAwesomeIcon icon={faSignOutAlt} /></span>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
