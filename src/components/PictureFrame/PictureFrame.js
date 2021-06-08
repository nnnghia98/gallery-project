import React, { Component } from 'react';
import Arrow from '../../assets/Arrow';
import './styles.css';

class PictureFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '',
      curIdx: 0,
      maxIdx: 0
    }
  }

  previousImg = () => {
    let { curIdx, maxIdx } = this.state;
    if (!curIdx) {
      curIdx = maxIdx;
    } else {
      curIdx--;
    }

    this.props.changeImage(curIdx);
  }

  nextImg = () => {
    let { curIdx, maxIdx } = this.state;
    if (curIdx < maxIdx) {
      curIdx++;
    } else {
      curIdx = 0;
    }

    this.props.changeImage(curIdx);
  }

  static getDerivedStateFromProps(props, state) {
    return { img: props.img, curIdx: props.curIdx, maxIdx: props.maxIdx };
  }

  render() {
    const { img } = this.state;
    return (
      <div className='picture-box'>
        <span onClick={this.previousImg}><Arrow id='arrow-left' dir='left' /></span>
        <div className='picture-frame'>
          <img src={img.src} alt='marvel-endgame-img'></img>
          <div>
            <h2>{img.title}</h2>
            {img.story}
          </div>
        </div>
        <span onClick={this.nextImg}><Arrow id='arrow-right' dir='right' /></span>
      </div>
    )
  }
}

export default PictureFrame;
