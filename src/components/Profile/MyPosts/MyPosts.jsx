import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Post';

let postData = [
  {id:1, message:"My ferst post", lake:23},
  {id:2, message:"Hey its im", lake:30},
  {id:3, message:"Its okey", lake:14}

];

let postsElement = postData.map(p => <Posts message={p.message} lake={p.lake}/>);

const MyPosts = () => {
  return <div className={s.MyPosts}>
  <p>My posts</p>
   <textarea/>
   <button>Add</button>
    {postsElement}
  </div>
}

export default MyPosts;