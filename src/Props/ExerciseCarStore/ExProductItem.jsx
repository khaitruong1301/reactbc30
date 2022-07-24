import React, { Component } from 'react'

export default class ExProductItem extends Component {
  render() {
    let {product,xemChiTiet} = this.props;
    return (
      <div className='card'>
        <img src={product.img} alt='...' />
        <div className='card-body'>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modelId" onClick={()=>{
                xemChiTiet(product);
            }}>Detail</button>
        </div>
      </div>
    )
  }
}
