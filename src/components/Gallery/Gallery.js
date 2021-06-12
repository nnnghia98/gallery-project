import React, { Component } from 'react';
import PictureFrame from '../PictureFrame/PictureFrame';
import ThumbnailBar from '../ThumbnailBar/ThumbnailBar';
import './Gallery.css';

const images = [
  {
    src: 'https://images.hdqwalls.com/wallpapers/tony-stark-building-suit-v8.jpg',
    title: 'Tony',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus.'
  },
  {
    src: 'https://images8.alphacoders.com/100/1004410.jpg',
    title: 'Steve',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus.'
  },
  {
    src: 'https://images7.alphacoders.com/100/1004420.jpg',
    title: 'Thor',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus.'
  },
  {
    src: 'https://files.wallpaperpass.com/2019/10/endgame%20wallpaper%20190%20-%201920x1080.jpg',
    title: 'Peter',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus.'
  },
  {
    src: 'https://4.bp.blogspot.com/-XgQkc5AgLtY/XKWxkj2sigI/AAAAAAAABPc/fa-qd9fgAIA6hQyaNsa6D0FExR_ibvj2ACKgBGAs/w0/avengers-endgame-black-widow-natasha-romanoff-uhdpaper.com-4K-84.jpg',
    title: 'Natasha',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus.'
  },
  {
    src: 'https://c4.wallpaperflare.com/wallpaper/260/919/644/the-avengers-avengers-endgame-brie-larson-captain-marvel-hd-wallpaper-preview.jpg',
    title: 'Carol',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus.'
  },
  {
    src: 'https://images5.alphacoders.com/100/1004422.jpg',
    title: 'Scott',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus.'
  },
]

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      images: images,
      curImage: images[0],
      curIdx: 0,
      maxIdx: images.length - 1
    }
  }

  changeImage = (idx) => {
    this.setState({ ...this.state, curImage: images[idx], curIdx: idx })
  }

  render() {
    return (
      <div className='gallery'>
        <PictureFrame img={this.state.curImage} curIdx={this.state.curIdx} maxIdx={this.state.maxIdx} changeImage={this.changeImage} />
        <ThumbnailBar images={this.state.images} curImage={this.state.curImage.src} curIdx={this.state.curIdx} changeImage={this.changeImage} />
      </div>
    )
  }
}

export default Gallery;
