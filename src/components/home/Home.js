import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="landing-page ">
                    <div className="wrapper bg-image vh-100">
                        <div className="d-flex flex-column justify-content-center text-center align-items-center h-100 text-white">
                            <h4 className="display-4 animated zoomIn">
                            <i class="fas fa-star"/> BigBasket</h4>
                            <p className="lead px-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aliquam consequatur dolore dolorum est eveniet ex fuga harum illo inventore iure laboriosam, libero molestias odit pariatur perferendis possimus provident quo recusandae rem repellat sed tempore ullam veritatis vitae voluptates?</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Home;
