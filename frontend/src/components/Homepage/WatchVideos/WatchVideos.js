import React, { Component } from 'react';
import './WatchVideos.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown, faShare, faSave, faDotCircle } from '@fortawesome/free-solid-svg-icons';

class WatchVideos extends Component {
  render() {
    return (
      <div className="watch-videos-div">
        <section className="left-section">
          <section className="video-play-section"></section>
          <section className="video-title-section">I Left my Job at Google - Here's why! - Here's why!</section>
          <section className="video-stats-section">
            <div className="left-stats">
              <span>327,235 views</span>
              <span className="separator">*</span>
              <span>27 Aug 2019</span>
            </div>
            <div className="right-controls">
              <article>
                <span className="marg"><FontAwesomeIcon icon={faThumbsUp} /></span>
                <span>10K</span>
              </article>
              <article>
                <span className="marg"><FontAwesomeIcon icon={faThumbsDown} /></span>
                <span>370</span>
              </article>
              <article>
                <span className="marg"><FontAwesomeIcon icon={faShare} /></span>
                <span>SHARE</span>
              </article>
              <article>
                <span className="marg"><FontAwesomeIcon icon={faSave} /></span>
                <span>SAVE</span>
              </article>
              <article>
                <span><FontAwesomeIcon icon={faDotCircle} /></span>
              </article>
            </div>
          </section>
          <section className="profile-section">
            <div className="profile-details">
              <article className="profile-pic">
                <img src={'./../../../../static/assets/images/pp.jpg'} alt="" />
              </article>
              <article className="profile">
                <span className="name">Clement Mihailescu</span>
                <span className="subscribers">69K subscribers</span>
              </article>
            </div>
            <article>
              <button>SUBSCRIBE</button>
            </article>
        </section>
        </section>
        
        <section className="right-section">
            x
        </section>
      </div>
    );
  }
}

export default WatchVideos;
