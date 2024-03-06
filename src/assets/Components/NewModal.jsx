const NewModal = ({ modalContent, modalState, modalChiuso }) => {
  
    return (
      <>
        {/* Usa modalState per controllare la visibilità del modal */}
        {modalState && (
          <div className={`modalStyle ${modalState ? 'show-modal': ''}`}>
            <p>{modalContent || 'Sono un modal'}</p>
            <button className="deleteButton" onClick={modalChiuso}>X</button>
          </div>
        )}
      </>
    );
  }
  
  export default NewModal;