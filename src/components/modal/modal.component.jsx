import React from "react";
import './modal.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';
Modal.setAppElement('#root');

// class Modal extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         if (!this.props.show) {
//             return null;
//         }
//         return (<div className="card__modal"> {this.props.children} {this.props.data}
//             <button onClick={e => this.onClose()}>Close</button></div>);
//     }

//     onClose = () => {
//         this.props.hideModal();
//     }
// }
// }shouldCloseOnOverlayClick={true} onRequestClose={() => { props.hideModal() }}
// }shouldCloseOnOverlayClick={true} onRequestClose={() => { props.hideModal() }}


const MyModal = (props) => {
    return (
        <Modal isOpen={props.isOpen}
            onRequestClose={() => { props.hideModal() }}
            shouldCloseOnOverlayClick={true}
            style={{
                content: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-betwen',
                }

            }}>
            <div className="modal__header">
                <div className="modal__title">Titre</div>
                <div onClick={() => props.hideModal()} className="modal__close">
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            <p>Modal title</p>
            <p>{props.data}</p>
        </Modal>
    )
}

// const MyModal = (props) => {


//     // const handleClick = e => {
//     //     console.log(props.inputRef)
//     //     if (props.inputRef.target.contains(e.target)) {
//     //         return
//     //     }
//     //     props.hideModal();
//     // }

//     // useEffect(() => {
//     //     const getClick = document.addEventListener('click', props.handleClick)

//     //     return () => {
//     //         getClick()
//     //     }ref={props.inputRef}
//     // }, [])

//     if (props.isOpen) {
//         return (<div className="card__modal" >
//             <div className="modal__header">
//                 <span className="modal__title">Bonjour</span>
//                 <span className="modal__close" onClick={(e) => { props.hideModal() }}>Close</span>
//             </div>
//             <div className="modal__body">
//                 {props.data}
//             </div>
//         </div>)
//     } else {
//         return null
//     }

// }

export default MyModal;
// export default Modal;