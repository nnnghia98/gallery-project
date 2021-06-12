import React, { Component, createRef } from 'react';
import './ThumbnailBar.css';

class ThumbnailBar extends Component {
  thumbnailRef = createRef([]);

  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      curImage: this.props.curImage
    }
    this.thumbnailRef.current = this.state.images.map((img, idx) => createRef())
  }

  chooseImage = (idx) => {
    this.props.changeImage(idx);
  }

  showImgTitle = (ref) => {
    ref.current.style.visibility = 'visible';
  }

  hideImgTitle = (ref) => {
    ref.current.style.visibility = 'hidden';
  }

  static getDerivedStateFromProps(props, state) {
    return { curImage: props.curImage };
  }

  render() {
    const { images, curImage } = this.state;

    return (
      <div className='thumbnail-bar'>
        {images.map((img, idx) => (
          <div id={img.title}
              key={Math.random()}
              className={img.src === curImage ? 'move-up' : ''}
              onMouseEnter={() => this.showImgTitle(this.thumbnailRef.current[idx])}
              onMouseLeave={() => this.hideImgTitle(this.thumbnailRef.current[idx])}>
            {img.src === curImage ? <div className='arrow-up' /> : <></>}
            <div className='thumbnail' onClick={() => this.chooseImage(idx)}><img src={img.src} alt='marvel-thumbnail'></img></div>
            <div ref={this.thumbnailRef.current[idx]} className='detail' style={{ visibility: 'hidden' }}>
              <div className='arrow-up black'></div>
              <div className='img-title'>{img.title}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ThumbnailBar;
