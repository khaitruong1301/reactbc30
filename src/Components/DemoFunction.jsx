//rfc: react functional component
import React from 'react'

export default function DemoFunction() {


    //Nội dung của component phải được bao phủ bởi 1 thẻ
    return (
        <div>
            <div className="card text-start w-25">
                <img className="card-img-top" src="https://picsum.photos/200/200" alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>
        </div>



    )
}

