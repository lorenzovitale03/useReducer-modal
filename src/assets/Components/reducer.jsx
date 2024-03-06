const reducer = (state,action) =>{
    console.log(state,action);
    if(action.type === 'TURN_ON'){
      console.log('bottone premuto');
    }
    if(action.type === 'OPEN_MODAL'){
      return {
        ...state, 
        isModalOpen: true,
      };
    }
    if(action.type === "CLOSE_MODAL"){
        return{
            ...state,
            isModalOpen: false,
        }
    }
    return state;
  };

  export default reducer