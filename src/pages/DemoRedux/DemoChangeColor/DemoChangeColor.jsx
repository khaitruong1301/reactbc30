//rcredux: Nhớ xoá mapDispatchToProps
import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoChangeColor extends Component {

    changeColor = (color) => {
        const action = {
            type:'CHANGE_COLOR',
            imgCar: `./img/products/${color}-car.jpg`
        }
        //Gửi dữ liệu lên redux 
        this.props.dispatch(action);
    }
    render() {
        return (
            <div className='container'>
                <h3>Bài tập chọn màu xe</h3>
                <div className='row'>
                    <div className='col-6'>
                        <img src={this.props.imgCar} className='w-100' />
                    </div>
                    <div className='col-6'>
                        <button className='btn mx-2' style={{ backgroundColor: 'red', color: '#fff' }} onClick={() => {
                            this.changeColor('red');
                        }}>Red</button>
                        <button className='btn mx-2' style={{ backgroundColor: 'black', color: '#fff' }} onClick={() => {
                            this.changeColor('black');

                        }}>black</button>
                        <button className='btn mx-2' style={{ backgroundColor: 'silver', color: '#fff' }} onClick={() => {
                            this.changeColor('silver');

                        }}>silver</button>
                        <button className='btn mx-2' style={{ backgroundColor: '#eee', color: '#fff' }} onClick={() => {
                            this.changeColor('steel')

                        }}>steel</button>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({ //state: rootReducer
    imgCar: state.imgCar
})
export default connect(mapStateToProps)(DemoChangeColor)
/*
    arrow function return về 1 object
    () => {
        return {

        }
    }
    Viết tắt: { return  tương đương ()
    () => ({})
*/