import React from 'react';
// import './MyButton.css';
import style from './MyButton.module.css';

const MyButton = () => {
    return (
        // <button className='btn'>MyButton</button>
        <button className={style.btn}>MyButton</button>
    )
}

export default MyButton;