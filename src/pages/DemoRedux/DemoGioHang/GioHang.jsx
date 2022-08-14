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
                    <button className='btn btn-primary mx-2' onClick={()=>{
                      const action = {
                        type:'TANG_GIAM_SO_LUONG',
                        payload: {
                          maSP:spGH.maSP,
                          soLuong: 1
                        }
                      }
                      //Gửi lên reducer
                      this.props.dispatch(action);
                    }}>+</button>
                    {spGH.soLuong}
                    <button className='btn btn-primary mx-2' onClick={()=>{
                      const action = {
                        type:'TANG_GIAM_SO_LUONG',
                        payload: {
                          maSP:spGH.maSP,
                          soLuong: -1
                        }
                      }
                      //Gửi lên reducer
                      this.props.dispatch(action);
                    }}>-</button>
                </td>
                <td>{spGH.giaBan}</td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td>
                    <button className='btn btn-danger mx-2' onClick={()=>{
                      const action = {
                        type:'XOA_GIO_HANG',
                        payload: {
                          maSPClick:spGH.maSP
                        }
                      };
                      //dispatch action lên reducer
                      this.props.dispatch(action);
                      
                    }}>Xoá</button>
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