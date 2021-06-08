import React, { Component } from 'react';
import './styles.css';

class ThumbnailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      curImage: this.props.curImage
    }
  }

  chooseImage = (idx) => {
    this.props.changeImage(idx);
  }

  showImgTitle = (title) => {
    const thumbnail = document.querySelector(`div[id="${title}"]`);

    console.log(thumbnail);
  }

  static getDerivedStateFromProps(props, state) {
    return { curImage: props.curImage };
  }

  render() {
    const { images, curImage } = this.state;

    return (
      <div className='thumbnail-bar'>
        {images.map((img, idx) => (
          <div id={img.title} key={Math.random()} className={img.src === curImage ? 'move-up' : ''} onMouseEnter={() => this.showImgTitle(img.title)}>
            {img.src === curImage ? <div className='arrow-up' /> : <></>}
            <div className='thumbnail' onClick={() => this.chooseImage(idx)}><img src={img.src} alt='marvel-thumbnail'></img></div>
            {/* <div className='detail'>
              <div className='arrow-up black'></div>
              <div className='img-title'>{img.title}</div>
            </div> */}
          </div>
        ))}
      </div>
    )
  }
}

export default ThumbnailBar;
