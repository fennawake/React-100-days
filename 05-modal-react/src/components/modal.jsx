import React from 'react'

const BACKGROUND_STYLE = {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    backgroundColor: 'rgb(0,0,0, 0.7)',
    zIndex: '1000',
}

const MODAL_STYLE = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '150px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    color: '#000'
}

export default function Modal({ isOpen, setVisibilityModal, children }) {

    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div>
                        <h1>{children}</h1>
                        <button onClick={setVisibilityModal}>close</button>
                    </div>
                </div>
            </div>
        )
    }

    return null

}
