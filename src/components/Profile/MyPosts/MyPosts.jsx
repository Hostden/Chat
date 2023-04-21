import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Post';

const MyPosts = () => {
  return <div className={s.MyPosts}>
  <p>My posts</p>
   <textarea></textarea>
   <button>Add</button>

    <Posts />

  </div>
}

export default MyPosts;
