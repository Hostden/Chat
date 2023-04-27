import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Post';

let postData = [
  {id:1, message:"My ferst post", lake:23},
  {id:2, message:"Hey its im", lake:30},
  {id:3, message:"Its okey", lake:14}

];

const MyPosts = () => {
  return <div className={s.MyPosts}>
  <p>My posts</p>
   <textarea/>
   <button>Add</button>

    <Posts message={postData[0].message} lake={postData[0].lake}/>
    <Posts message={postData[1].message} lake={postData[1].lake} />
    <Posts message={postData[2].message} lake={postData[2].lake} />

  </div>
}

export default MyPosts;