import React, { Component } from 'react'
import { connect } from 'react-redux'

class GioHang extends Component {
  render() {
    let {gioHang} = this.props;
    return (
      <div>
        <h3>Giỏ hàng</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá bán</th>
                    <th>Thành tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {gioHang.map((spGH,index)=>{
                return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td><img src={spGH.hinhAnh} alt='...' width={50} /></td>
                <td>{spGH.tenSP}</td>
                <td>
                    <button className='btn btn-primary mx-2'>+</button>
                    {spGH.soLuong}
                    <button className='btn btn-primary mx-2'>-</button>
                </td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td>
                    <button className='btn btn-danger mx-2'>Xoá</button>
                </td>
            </tr>
              })}
                
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  gioHang: state.demoGioHangReducer.gioHang
})



export default connect(mapStateToProps)(GioHang)