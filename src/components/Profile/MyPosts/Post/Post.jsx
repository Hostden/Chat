import React from 'react';
import s from './Post.module.css';

const Posts=(props) => {
    return <div className={s.Post}>
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/i?id=86768744741ff139256caf2e8a02c9217cf695e6-5291349-images-thumbs&n=13&exp=1" alt=""/>
            <p>{props.message}</p>
        </div>
        <span>lakes: {props.lake}</span>
        <hr/>
    </div>
}

export default Posts;
