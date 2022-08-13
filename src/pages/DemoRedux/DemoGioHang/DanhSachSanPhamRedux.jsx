import React, { Component } from "react";
import { connect } from "react-redux";
import SanPhamRedux from "./SanPhamRedux";

class DanhSachSanPhamRedux extends Component {
  renderSanPham = () => {
    let {arrSanPham} = this.props;
    return arrSanPham.map((sp,index)=>{
        return <div className="col-4" key={index}>
        <SanPhamRedux sp={sp} />
      </div>
    })
  };
  render() {
    console.log(this.props);
    return (
      <div className="danh-sach-san-pham mt-2">
        <h3>Danh sách sản phẩm</h3>
        <div className="row">
          {this.renderSanPham()}
          {/* <div className="col-4">
            <SanPhamRedux />
          </div>
          <div className="col-4">
            <SanPhamRedux />
          </div>
          <div className="col-4">
            <SanPhamRedux />
          </div> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  arrSanPham: state.demoGioHangReducer.arrSanPham,
});

export default connect(mapStateToProps)(DanhSachSanPhamRedux);
