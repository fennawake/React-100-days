import { useState } from 'react'
import Modal from './components/modal'
import './App.css'

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModal2, setIsOpenModal2] = useState(false);

  const openModal = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const openModal2 = () => {
    setIsOpenModal2(true)
  }

  const closeModal2 = () => {
    setIsOpenModal2(false)
  }

  return (
    <div className='App'>
      <h1>FrontEnd Begginers - Modal React</h1>
      <button onClick={openModal}> Open modal</button>
      <button onClick={openModal2}> Open modal</button>

      <Modal isOpen={isOpenModal} setVisibilityModal={closeModal} >
        Modal Content
      </Modal>


      <Modal isOpen={isOpenModal2} setVisibilityModal={closeModal2} >
        Modal Content 2
      </Modal>
    </div >
  )
}

export default App