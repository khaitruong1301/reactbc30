//rcc
import React, { Component } from 'react'

export default class SanPham extends Component {

    render() {
        let {dienThoai,xemChiTiet} = this.props;
        return (
            <div className='card'>
                <img src={dienThoai.hinhAnh} alt='...' height={400} />
                <div className='card-body'>
                    <h3>{dienThoai.tenSP}</h3>
                    <p>{dienThoai.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success' onClick={() => {
                        // this.props.xemChiTiet(dienThoai);
                        xemChiTiet(dienThoai);
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
