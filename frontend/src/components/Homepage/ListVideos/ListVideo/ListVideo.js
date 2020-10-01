import React from 'react';
import './ListVideo.scss';

const ListVideo = props => {
  return (
    <div className="list-video">
      <section onClick={props.watch} className="list-videos-upper-section">
        <div className="video">
          <img src={'./../../../../../static/assets/images/pp.jpg'} alt={props.alt} />
          <span className="duration">{props.duration}</span>
        </div>
        <div className="description">
          <img src={'./../../../../../static/assets/images/pp.jpg'} alt={props.alt} />
          <span className="desc-text">{props.desc}</span>
        </div>
      </section>

      <section className="list-videos-lower-section">
        <div className="upload-details">
          <p className="username">{props.username}</p>
          <p>{props.views + 'K'} view(s) - {props.age} months ago</p>
        </div>
      </section>
    </div>
  );
}

export default ListVideo;
