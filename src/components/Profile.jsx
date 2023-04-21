import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return <div className={s.content}>
  <div>
  <img src="https://f9.mirkvartir.me/journal/custom/2b713fd5-2ff8-4184-b9ed-d2faf61a48a1.jpg" alt="" />
  </div>

  <div>Ava = desc</div>

  <div>
    My posts

    <div>New post</div>

    <div className={s.item}>Post 1</div>
    <div className={s.item}>Post 2</div>

  </div>
</div>
}

export default Profile;
