import { useReducer, useState } from 'react';
import './App.css';
import NewModal from './assets/Components/NewModal';
import reducer from './assets/Components/reducer';


const initialState = {
  isModalOpen: false,
  modalContent: 'Modal aperto',
};


function App() {
  //dispatch indica azioni che devono essere compiute per modificare lo state.
  const [state, dispatch] = useReducer(reducer, initialState);

  const premuto = () =>{
    dispatch({type: 'TURN_ON'})
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const modalAperto = () =>{
    dispatch({type:'OPEN_MODAL'});
  }


  const modalChiuso = () =>{
    dispatch({type:'CLOSE_MODAL'});
  };

  return (
    <>
      <ul className='navBar'>
        <li>Home</li>
        <li>Chi siamo</li>
        <li>Progetti</li>
        <li>Contattaci</li>
      </ul>

      <div className='externalDivButton'>
        <button className='modalButton' onClick={modalAperto}>Apri modal</button>
      </div>

      {/* Passa modalState come prop */}
      <NewModal modalContent={state.modalContent} modalState={state.isModalOpen} modalChiuso={modalChiuso}/>
    </>
  )
}

export default App;
