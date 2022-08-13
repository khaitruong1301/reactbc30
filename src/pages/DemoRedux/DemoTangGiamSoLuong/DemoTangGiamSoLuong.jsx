import React, { Component } from 'react'
//kết nối redux
import { connect } from 'react-redux'


class DemoTangGiamSoLuong extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>Demo tăng giảm số lượng</h3>
                <p>
                    Number: {this.props.number}
                </p>
                <button className='btn btn-success' onClick={() => {
                    //action: đại diện dữ liệu gửi lên store làm thay đổi state
                    const action = {
                        type:'TANG_SO_LUONG', //Thuộc tính bắt buộc
                        newNumber: this.props.number + 1
                    }
                    //sử dụng hàm this.props.dispatch để gửi dữ liệu lên redux
                    this.props.dispatch(action);
                }}>+</button>
                 <button className='btn btn-success' onClick={() => {
                    //action: đại diện dữ liệu gửi lên store làm thay đổi state
                    const action = {
                        type:'GIAM_SO_LUONG', //Thuộc tính bắt buộc
                        newNumber: this.props.number - 1
                    }
                    //sử dụng hàm this.props.dispatch để gửi dữ liệu lên redux
                    this.props.dispatch(action);
                }}>-</button>
            </div>
        )
    }
}
//HOC
/*
    Chuyển state của redux về thành props của component
*/
const mapStateToProps = (rootReducer) => {
    return {
        number: rootReducer.number
    }
}
//Component chứa state redux = connect()(DemoTangGiamSoLuong);
export default connect(mapStateToProps)(DemoTangGiamSoLuong)