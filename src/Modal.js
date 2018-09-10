import React, { Component } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import './modal.scss';

class Modal extends React.Component {
    constructor(props){
        super(props);
    }

    listenKeyboard(event) {
        if (event.key === 'Escape' || event.keyCode === 27) {
          this.props.onClose();
        }
      }
      
    componentDidMount() {
    if (this.props.onClose) {
        window.addEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
      }
      
    componentWillUnmount() {
    if (this.props.onClose) {
        window.removeEventListener('keydown', this.listenKeyboard.bind(this), true);
    }
      }
      
    onOverlayClick() {
    this.props.onClose();
    }
      
    onDialogClick(event) {
    event.stopPropagation();
    }

    render(){
        let isOpen = this.props.data.get("isOpen");
        return (
            <div>
              <div className="modal-overlay-div" style={overlayStyle} />
              <div className="modal-content-div" style={contentStyle} onClick={this.onOverlayClick.bind(this)}>
                <div className="modal-dialog-div" style={dialogStyle} onClick={this.onDialogClick}>
                  {this.props.children}
                </div>
              </div>
            </div>
          );
    }
    
}

export default Modal;
