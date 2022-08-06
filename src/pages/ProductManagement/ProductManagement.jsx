import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'
import axios from 'axios';

export default class ProductManagement extends Component {

  state = {
    arrProduct: [
      { id: '1', name: 'product 1', price: '1000', description: 'product 1 desc', img: 'https://picsum.photos/200/200', productType: 'mobile' },
      { id: '2', name: 'product 2', price: '2000', description: 'product 2 desc', img: 'https://picsum.photos/200/200', productType: 'tablet' }
    ],
    productEdit: {
      id: '',
      name: '',
      price: '',
      img: '',
      productType: 'mobile',
      description: ''
    }
  }

  editProduct = (prodEdit) =>{
    console.log(prodEdit);
    //setState this.state.productEdit
    this.setState({
      productEdit:prodEdit
    })
  }


  //this.state.arrProduct = [{},{},{}]
  updateProduct = (productUpdate) => {
    //Lấy ra dữ liệu trong mảng (prodUpdate) 
    let prodUpdate = this.state.arrProduct.find(pro => pro.id == productUpdate.id);
    if(prodUpdate){
        for(let key in prodUpdate){
            prodUpdate[key] = productUpdate[key];
        }
    }
    //Sau khi thay đổi thì set lại state
    this.setState({
      arrProduct:this.state.arrProduct
    })

    console.log(productUpdate);
  }


  //CRUD
  //Muốn thay đổi state nào thì viết hàm setState tại vị trí state đó
  createProduct = (newProduct) => {
    console.log('newProduct', newProduct);
    let arrProductUpdate = this.state.arrProduct;
    arrProductUpdate.push(newProduct);
    //this.setState
    this.setState({
      arrProduct: arrProductUpdate
    })
  }

  delProduct = (idClick) => {
    //Xử lý mảng => setState
    // console.log('idClick',idClick);
    let arrProductUpdate = this.state.arrProduct;
    //Tìm ra vị trí của id cần xoá
    // let indexDel = arrProductUpdate.findIndex(p => p.id == idClick);
    // if(indexDel !== -1){
    //   //Tìm thấy indexDel => xoá
    //   arrProductUpdate.splice(indexDel,1); 
    // } 

    arrProductUpdate = arrProductUpdate.filter(p => p.id !== idClick);
    //setState cho arrProduct
    this.setState({
      arrProduct: arrProductUpdate
    })
  }


  render() {
    return (
      <div className='container'>
        <h3>ProductManagement</h3>
        <FormProduct updateProduct={this.updateProduct} productEdit={this.state.productEdit} createProduct={this.createProduct} />
        <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct} editProduct={this.editProduct}/>
      </div>
    )
  }

  componentDidMount() {
      let promise = axios({
          url:'https://svcy.myclass.vn/api/product/getall',
          method:'GET'
      });

      promise.then(result => {
          //Thành công
          this.setState({
            arrProduct:result.data
          })
      });

      promise.catch(err => {
        console.log(err)
      })
  }
}
