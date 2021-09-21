import React from "react";
import './ModalStyle.css';


class Modal extends React.Component {
state = {
    isOpen: false,
}

    render() {
        return (
            <React.Fragment>
            <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>

            {this.state.isOpen && <div className='modal'>
                <div className='modal-body'>
                    <h1>Modal Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed fugiat, incidunt ullam nemo nulla ad quisquam tenetur! Fugit repellat veritatis maiores possimus voluptatibus nisi quia architecto libero perferendis odit.</p>
                    <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
                </div>
            </div>}
            </React.Fragment>
        )
    }
}

export default Modal;
s