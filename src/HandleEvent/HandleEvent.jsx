//rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (e) => {
        alert('hello cybersoft');
    }

    showMessage = (name) => {
        alert('Hello ' + name);
    }

    userLogin = {
        username:'abc',
        password:'123'
    }
    //render ra giao diện chỉ render primitive value : string, boolean, number, jsx (thẻ html của react)
    render() {
        return (
            <div className='container'>
                <h3>Handle Event click</h3>
                <p>username: {this.userLogin.username}</p>
                <button className='btn btn-danger' onClick={(e) => {
                    //Gọi hàm khác
                    this.showMessage('Khải Đỗ')
                }}>Click</button>
                <button className='btn btn-success ms-2' onClick={this.handleClick}>Click</button>
                <h3>Handle event change</h3>
                <input className='form-control w-25' onChange={(e)=> {
                    //e.target: chính là thẻ input
                    var tagInput = e.target;
                    console.log('Value',tagInput.value);
                }} />
            </div>
        )
    }
}

