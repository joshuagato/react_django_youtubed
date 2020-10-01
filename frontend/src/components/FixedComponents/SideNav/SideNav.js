import React, { Component } from 'react';
import './SideNav.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHistory, faFolder, faQuestionCircle, faClock, faFireAlt, faFire, faThumbsUp, faCog, faFlag, faFootballBall, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faHackerNews } from '@fortawesome/free-brands-svg-icons';

import MenuItem from './MenuItem/MenuItem';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

export class SideNav extends Component {
  render() {
    return (
      <aside className="side-nav-div">
        <MenuItem to='/' icon={faHome} title="Home" />
        <MenuItem to='/' icon={faFireAlt} title="Trending" />
        <MenuItem to='/' icon={faYoutubeSquare} title="Subscriptions" />
        <hr />
        <MenuItem to='/' icon={faFolder} title="Library" />
        <MenuItem to='/' icon={faHistory} title="History" />
        <MenuItem to='/' icon={faClock} title="Watch Later" />
        <MenuItem to='/' icon={faThumbsUp} title="Liked Videos" />
        <hr />
        <MenuItem to='/' icon={faFire} title="Popular..." />
        <MenuItem to='/' icon={faHistory} title="Music" />
        <MenuItem to='/' icon={faFootballBall} title="Sports" />
        <MenuItem to='/' icon={faGamepad} title="Gaming" />
        <hr />
        <MenuItem to='/' icon={faCog} title="Settings" />
        <MenuItem to='/' icon={faFlag} title="Report history" />
        <MenuItem to='/' icon={faQuestionCircle} title="Help" />
        <MenuItem to='/' icon={faHackerNews} title="Send feedback" />
        <hr />
      </aside>
    );
  }
}

export default SideNav;
