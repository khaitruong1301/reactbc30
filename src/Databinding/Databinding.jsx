import React, { Component } from 'react'

export default class Databinding extends Component {
    userName = 'khaido@gmail.com';

    showInfo() {
        return 'Hello cybersoft';
    }

    renderCard = () => {
        return <div>
            username: {this.userName}
            <img src='https://picsum.photos/200/200' alt='...' />
        </div>
    }
    //Phương thức render
    render() {
        //Biến và hàm thì khi khai báo có var let const
        const hoTen = 'Khải Đỗ';
        const tinhDiemTrungBinh = (diemToan, diemVan) => {
            return (diemToan + diemVan) / 2;
        }
        return (
            <div>
                Databinding
                <p>Họ tên:{hoTen} </p>
                <p>Điểm trung bình:{tinhDiemTrungBinh(8, 2)}</p>
                <hr />
                <p>{this.showInfo()}</p>
                <div>
                    {this.renderCard()}
                </div>
            </div>
        )
    }
}
