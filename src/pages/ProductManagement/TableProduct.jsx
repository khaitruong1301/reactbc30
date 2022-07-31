import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
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
            <tr>
                <td>1</td>
                <td><img src="https://picsum.photos/50/50" alt='1' /></td>
                <td>product 1</td>
                <td>1000</td>
                <td>iphone x</td>
                <td>
                    mobile
                </td>
                <td>
                    <button className='btn btn-danger mx-2'>Delete</button>
                    <button className='btn btn-primary mx-2'>Edit</button>
                </td>
            </tr>
        </tbody>
      </table>
    )
  }
}
