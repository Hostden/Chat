import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Post';

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Posts message={p.message} lake={p.lake}/>);

  return <div className={s.MyPosts}>
  <p>My posts</p>
   <textarea/>
   <button>Add</button>
    {postsElement}
  </div>
}

export default MyPosts;