import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Post';

const MyPosts = () => {
  return <div className={s.MyPosts}>
  <p>My posts</p>
   <textarea></textarea>
   <button>Add</button>

    <Posts message='My ferst post' lake='23' />
    <Posts message='Hey its im' lake='33' />
    <Posts message='Its okey' lake='53' />

  </div>
}

export default MyPosts;
