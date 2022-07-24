import React, { Component } from 'react'
import ExProductItem from './ExProductItem';

const data = [
    { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/products/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/products/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/products/steel-car.jpg', price: 4000 }
];

export default class ExProductList extends Component {

    renderProduct = () => {
        let {xemChiTiet} = this.props;
        return data.map((prod, index) => {
            return <div className='col-3' key={index}>
                <ExProductItem product={prod} xemChiTiet={xemChiTiet} />
            </div>
        })
    }
    render() {
        return (
            <div>
                <h3 className='text-center'>Product list</h3>
                <div className='row'>
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
