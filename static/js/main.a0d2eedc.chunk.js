(this["webpackJsonpgallery-project"]=this["webpackJsonpgallery-project"]||[]).push([[0],[,,,,,,,,,,,,,function(e,i,t){},function(e,i,t){},,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var a=t(1),s=t.n(a),r=t(8),n=t.n(r),c=(t(13),t(2)),o=t(3),m=t(5),u=t(4),l=t(7),d=(t(14),t(0));var p=function(e){var i=e.id,t=e.dir;return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",id:i,width:"14.906",height:"22.75",viewBox:"0 0 14.906 22.75",style:"left"===t?{}:{transform:"rotate(180deg)"},children:[Object(d.jsx)("defs",{}),Object(d.jsx)("path",{id:"Shape_3_copy","data-name":"Shape 3 copy",className:"cls-1",d:"M129.01,311.107a2.45,2.45,0,0,1-3.536,0L114.868,300.5l10.606-10.607a2.5,2.5,0,1,1,3.536,3.536l-7.071,7.071,7.071,7.071A2.449,2.449,0,0,1,129.01,311.107Z",transform:"translate(-114.875 -289.125)"})]})},g=(t(16),function(e){Object(m.a)(t,e);var i=Object(u.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=i.call(this,e)).previousImg=function(){var e=a.state,i=e.curIdx,t=e.maxIdx;i?i--:i=t,a.props.changeImage(i)},a.nextImg=function(){var e=a.state,i=e.curIdx;i<e.maxIdx?i++:i=0,a.props.changeImage(i)},a.state={img:"",curIdx:0,maxIdx:0},a}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.img;return Object(d.jsxs)("div",{className:"picture-box",children:[Object(d.jsx)("span",{onClick:this.previousImg,children:Object(d.jsx)(p,{id:"arrow-left",dir:"left"})}),Object(d.jsxs)("div",{className:"picture-frame",children:[Object(d.jsx)("img",{src:e.src,alt:"marvel-endgame-img"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.title}),e.story]})]}),Object(d.jsx)("span",{onClick:this.nextImg,children:Object(d.jsx)(p,{id:"arrow-right",dir:"right"})})]})}}],[{key:"getDerivedStateFromProps",value:function(e,i){return{img:e.img,curIdx:e.curIdx,maxIdx:e.maxIdx}}}]),t}(a.Component)),b=(t(17),function(e){Object(m.a)(t,e);var i=Object(u.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=i.call(this,e)).thumbnailRef=Object(a.createRef)([]),s.chooseImage=function(e){s.props.changeImage(e)},s.showImgTitle=function(e){e.current.style.visibility="visible"},s.hideImgTitle=function(e){e.current.style.visibility="hidden"},s.state={images:s.props.images,curImage:s.props.curImage},s.thumbnailRef.current=s.state.images.map((function(e,i){return Object(a.createRef)()})),s}return Object(o.a)(t,[{key:"render",value:function(){var e=this,i=this.state,t=i.images,a=i.curImage;return Object(d.jsx)("div",{className:"thumbnail-bar",children:t.map((function(i,t){return Object(d.jsxs)("div",{id:i.title,className:i.src===a?"move-up":"",onMouseEnter:function(){return e.showImgTitle(e.thumbnailRef.current[t])},onMouseLeave:function(){return e.hideImgTitle(e.thumbnailRef.current[t])},children:[i.src===a?Object(d.jsx)("div",{className:"arrow-up"}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("div",{className:"thumbnail",onClick:function(){return e.chooseImage(t)},children:Object(d.jsx)("img",{src:i.src,alt:"marvel-thumbnail"})}),Object(d.jsxs)("div",{ref:e.thumbnailRef.current[t],className:"detail",style:{visibility:"hidden"},children:[Object(d.jsx)("div",{className:"arrow-up black"}),Object(d.jsx)("div",{className:"img-title",children:i.title})]})]},Math.random())}))})}}],[{key:"getDerivedStateFromProps",value:function(e,i){return{curImage:e.curImage}}}]),t}(a.Component)),h=(t(18),[{src:"https://images.hdqwalls.com/wallpapers/tony-stark-building-suit-v8.jpg",title:"Tony",story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus."},{src:"https://images8.alphacoders.com/100/1004410.jpg",title:"Steve",story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus."},{src:"https://images7.alphacoders.com/100/1004420.jpg",title:"Thor",story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus."},{src:"https://files.wallpaperpass.com/2019/10/endgame%20wallpaper%20190%20-%201920x1080.jpg",title:"Peter",story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus."},{src:"https://4.bp.blogspot.com/-XgQkc5AgLtY/XKWxkj2sigI/AAAAAAAABPc/fa-qd9fgAIA6hQyaNsa6D0FExR_ibvj2ACKgBGAs/w0/avengers-endgame-black-widow-natasha-romanoff-uhdpaper.com-4K-84.jpg",title:"Natasha",story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus."},{src:"https://c4.wallpaperflare.com/wallpaper/260/919/644/the-avengers-avengers-endgame-brie-larson-captain-marvel-hd-wallpaper-preview.jpg",title:"Carol",story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus."},{src:"https://images5.alphacoders.com/100/1004422.jpg",title:"Scott",story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate labore officiis nesciunt beatae fuga modi laborum unde inventore enim voluptas. Veniam explicabo autem ipsa nisi quidem adipisci, error dignissimos temporibus."}]),j=function(e){Object(m.a)(t,e);var i=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=i.call(this)).changeImage=function(i){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{curImage:h[i],curIdx:i}))},e.state={images:h,curImage:h[0],curIdx:0,maxIdx:h.length-1},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"gallery",children:[Object(d.jsx)(g,{img:this.state.curImage,curIdx:this.state.curIdx,maxIdx:this.state.maxIdx,changeImage:this.changeImage}),Object(d.jsx)(b,{images:this.state.images,curImage:this.state.curImage.src,curIdx:this.state.curIdx,changeImage:this.changeImage})]})}}]),t}(a.Component),f=function(e){Object(m.a)(t,e);var i=Object(u.a)(t);function t(){return Object(c.a)(this,t),i.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(j,{})})}}]),t}(a.Component);n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.a0d2eedc.chunk.js.map