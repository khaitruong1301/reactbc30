//rcc
import React, { Component } from 'react'

export default class BaiTapState extends Component {
    arrImg = ['./img/products/black-car.jpg','./img/products/red-car.jpg','./img/products/silver-car.jpg','./img/products/steel-car.jpg']
    state = {
        imgSrc: './img/products/black-car.jpg', //state default 
        fSize:16
    }

    randomImgSrc = () => {
        let output = Math.floor(Math.random() * 4); // 0 | 1 | 2 |3
        console.log(output);
        
        this.setState({
            imgSrc: this.arrImg[output]
        })

    }

  render() {
    return (
      <div className='container'>
        <h3>Bài tập 1: Bài tập chọn màu xe</h3>
        <div className='row'>
            <div className='col-6'>
                <img className='w-100' src={this.state.imgSrc} alt='...' />
            </div>
            <div className='col-6'>
                <button onClick={()=>{
                    this.randomImgSrc();
                }}>random</button>
                <button className='btn btn-danger m-2' onClick={()=>{
                    //Thay đổi hình
                    this.setState({
                        imgSrc:'./img/products/red-car.jpg'
                    })
                }}>Red</button>
                <button className='btn btn-dark m-2' onClick={()=>{
                     this.setState({
                        imgSrc:'./img/products/black-car.jpg'
                    })
                }}>black</button>
                <button className='btn btn-secondary m-2' onClick={()=>{
                     this.setState({
                        imgSrc:'./img/products/silver-car.jpg'
                    })
                }}>silver</button>
                <button className='btn btn-default m-2 border' onClick={()=>{
                     this.setState({
                        imgSrc:'./img/products/steel-car.jpg'
                    })
                }}>steel</button>
            </div>
        </div>
        <hr />
        <h3>Bài tập 2: Tăng giảm font-size</h3>
        <p style={{fontSize:this.state.fSize}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo fugiat soluta molestiae maiores perspiciatis illum aliquam eius eum minus harum debitis autem deserunt culpa amet impedit odit, laborum, porro incidunt!</p>
        <button className='btn btn-primary m-2' onClick={()=>{
            this.setState({
                fSize: this.state.fSize + 1
            })
        }}>+</button>
        <button className='btn btn-primary m-2' onClick={()=>{
             this.setState({
                fSize: this.state.fSize - 1
            })
        }}>-</button>

      </div>
    )
  }
}
