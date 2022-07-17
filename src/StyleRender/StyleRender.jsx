//rcc
import React, { Component } from 'react';
//Dùng cách 1 khi css cho page
import './style.css'; //Cách này css sẽ ảnh hưởng toàn bộ ứng dụng
//Dùng khi class có thể bị thay đổi bởi event từ người dùng
import style from './StyleRender.module.css';

//Cách style trực tiếp: Dùng khi giá trị style bị thay đổi bởi event từ người dùng

export default class StyleRender extends Component {

    render() {
        return (
            <div className='container'>
                StyleRender
                <p className='color-red'>Hello cybersoft</p>

                <p className={`${style['color-blue']} display-4`}>text blue</p>

                <p style={{ color: 'green', padding: '15px', backgroundColor: 'black' }}>text green</p>
            </div>
        )
    }
}
