import React, { Component } from 'react'

export default class TableProduct extends Component {

  render() {
    let {arrProduct} = this.props;
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>name</th>
            <th>price</th>
            <th>description</th>
            <th>type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((prod,index) => {
            return <tr key={index}>
              <td>{prod.id}</td>
              <td><img width={50} src={prod.img} alt='1' /></td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.description}</td>
              <td>
                {prod.productType}
              </td>
              <td>
                <button className='btn btn-danger mx-2' onClick={()=>{
                  this.props.delProduct(prod.id);
                }}>Delete</button>
                <button className='btn btn-primary mx-2' onClick={()=>{
                  this.props.editProduct(prod);
                }}>Edit</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}
