import React, { Component } from 'react'

export default class DemoState extends Component {

    username = 'khaido';
    status = false; //false: Chưa đăng nhập, true: đã đăng nhập
    //this.state: là thuộc tính có sẵn được kế thừa từ class Component của thư viện reactjs. Các giá trị thay đổi trên giao diện sẽ được chứa trong thuộc tính của this.state
    state = {
        status: false,
        stataA: 'a',
        stateB: 'b'
    }
    renderLogin = () => {
        //Nếu if có return thì không cần viết else
        if (this.state.status) {
            return <span className='text-white'>{this.username}</span>
        }
        return <button className='btn btn-danger' onClick={(e) => {
            //Chặn sự kiện reload browser
            e.preventDefault();
            this.dangNhap();
        }}>Đăng nhập</button>
    }

    dangNhap =  () => {
        console.log('Đăng nhập');
        // this.state.status = true; Không được phép gán state trực tiếp
        // let newState = {status: true};
        //this.setState(newState): this.setState nhận vào 1 object state mới thay thế cho object state cũ, đồng thời render lại giao diện.
        // Hàm setState là 1 hàm bất đồng bộ
         this.setState({
            status: true
        }, () => {
            //Hàm sẽ tự chạy sau khi state thay đổi và giao diện đã được render xong
            console.log('state', this.state);
        });
    }

    

    render() {
        return (
            <div className='container'>
                <h3>Demo state</h3>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            {/* {this.status? <span className='text-white'>{this.username}</span> : <button className='btn btn-success'>Đăng nhập</button>} */}
                            {this.renderLogin()}
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
