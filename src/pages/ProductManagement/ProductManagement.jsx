import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

export default class ProductManagement extends Component {
  render() {
    return (
      <div className='container'>
        <h3>ProductManagement</h3>
        <FormProduct />
        <TableProduct />
      </div>
    )
  }
}
