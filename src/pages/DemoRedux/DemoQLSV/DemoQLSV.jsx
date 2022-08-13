import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoQLSV extends Component {

    render() {
        let { arrSinhVien, sinhVien } = this.props.qlsvReducer;
        return (
            <div className='container'>
                <ul style={{ listStyle: 'none' }}>
                    {arrSinhVien.map((sv, index) => {
                        return <li key={index}>{sv.id} - {sv.name}</li>
                    })}
                </ul>
                <form className='form' >
                    <div className='form-group'>
                        <p>id</p>
                        <input className='form-control' id="id" value={sinhVien.id} onChange={(e) => {

                        }} />
                    </div>
                    <div className='form-group'>
                        <p>name</p>
                        <input className='form-control' id="name" value={sinhVien.name} onChange={(e) => {

                        }} />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success'>submit</button>
                    </div>
                </form>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    qlsvReducer: state.qlsvReducer
})
export default connect(mapStateToProps)(DemoQLSV)