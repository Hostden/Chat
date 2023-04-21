import React from 'react';
import s from './Post.module.css';

const Posts = () => {
  return <div className={s.Post}>
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=86768744741ff139256caf2e8a02c9217cf695e6-5291349-images-thumbs&n=13&exp=1" alt="" />
      <p>Hey, hellow!</p>
    </div>
    <div className={s.item}>
      <img src="https://avatars.mds.yandex.net/i?id=86768744741ff139256caf2e8a02c9217cf695e6-5291349-images-thumbs&n=13&exp=1" alt="" />
      <p>Hey, hellow!</p>
    </div>
  </div>
}

export default Posts;
