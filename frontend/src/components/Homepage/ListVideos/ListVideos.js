import React, { Component } from 'react';
import './ListVideos.scss';

import ListVideo from './ListVideo/ListVideo';

class ListVideos extends Component {

  state = {
    myArray: [1,2,3,4,5,6,7,8]
  }

  watchHandler = () => {
    this.props.history.push('/watch-videos');
  }

  render() {
    let desc = "I Left my Job at Google - Here's why! - Here's why!";
    let usnm = "Clement Mihailescu";

    return (
      <div className="list-videos">
        <section className="recommended-section add-margin">
          <div className="heading">
            <h4>Recommended</h4>
          </div>
          {this.state.myArray.map(iteration => <ListVideo key={iteration} watch={this.watchHandler} 
            desc={desc} username={usnm}  views={89} age={10} duration={'3:06'} />)}
        </section>

        <section className="trending-section add-margin">
          <div className="heading">
            <h4>Trending</h4>
          </div>
          {this.state.myArray.map(iteration => <ListVideo key={iteration} watch={this.watchHandler} 
            desc={desc} username={usnm}  views={89} age={10} duration={'3:06'} />)}
        </section>
      </div>
    );
  }
}

export default ListVideos;
