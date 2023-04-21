import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className={s.content}>
  <div>
  <img src="https://f9.mirkvartir.me/journal/custom/2b713fd5-2ff8-4184-b9ed-d2faf61a48a1.jpg" alt="" />
  </div>

  <div className={s.profile}>
    <img src="./ava.webp" alt="" />
    <p>Дмитрий Кадиновский</p>
  </div>

  <MyPosts />
</div>
}

export default Profile;
