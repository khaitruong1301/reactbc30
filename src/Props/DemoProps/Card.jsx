//rcc
import React, { Component } from 'react'

export default class Card extends Component {


    render() {
        /*
            So sánh this.state và this.props
            + state và props: đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu ra giao diện.
            + state làm nhiệm vụ quản lý các giá trị thay đổi trên giao diện và có thể gán lại giá trị mới thông qua hàm setState
            + props làm nhiệm vụ nhận giá trị từ nơi sử dụng thẻ (component cha) truyền vào và không được gán lại (readonly);
        */

        //this.props là thuộc tính có sẵn của component dùng để nhận giá trị từ component cha truyền vào
        console.log(this.props);
        let {tenSP,gia} = this.props;
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{tenSP}</h4>
                    <p className="card-text">{gia}</p>
                </div>
            </div>

        )
    }
}
