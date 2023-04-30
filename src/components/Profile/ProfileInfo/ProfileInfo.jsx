import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return(
    <div>
      <div className={s.content}>
      <img src="https://f9.mirkvartir.me/journal/custom/2b713fd5-2ff8-4184-b9ed-d2faf61a48a1.jpg" alt="" />
      </div>

      <div className={s.profile}>
        <img src="./ava.webp" alt="" />
        <p>Дмитрий Кадиновский</p>
      </div>
    </div>
)
}

export default ProfileInfo;
