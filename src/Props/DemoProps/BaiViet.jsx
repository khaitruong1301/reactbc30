//rcc
import React, { Component } from 'react'

export default class BaiViet extends Component {
  render() {
    let {obBaiViet} = this.props;
    return (
      <div className='bg-secondary text-white p-3 mt-2'>
        <h3>{obBaiViet.tieuDe}</h3>
        <p>{obBaiViet.noiDung}</p>
      </div>
    )
  }
}
