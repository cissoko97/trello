import React from "react";
import './modal.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-modal';


Modal.setAppElement('#root');

const MyModal = (props) => {
    var project = JSON.parse(localStorage.getItem('project'));
    var color = Object.keys(project.ticket);
    let valeur = [];
    color.forEach(element => {
        valeur.push(project.ticket[element][0])
    });

    return (
        <Modal isOpen={props.isOpen}
            onRequestClose={() => { props.hideModal() }}
            shouldCloseOnOverlayClick={true}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,.64)'
                },
                content: {
                    display: 'flex',
                    padding: '15px',
                    margin: 'auto',
                    width: '770px',
                    flexDirection: 'column',
                    justifyContent: 'space-betwen',
                }

            }}>
            <div className="modal__header">
                <div className="modal__title">{props.data.label}</div>
                <div onClick={() => props.hideModal()} className="modal__close">
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            </div>
            {props.children}

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