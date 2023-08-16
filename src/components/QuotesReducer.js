const INITIAL ={
    menuActive:false,
    menuPosition:{top:0,right:0},
    openFor:null,
    editingQuote:null,
    focus:false,
}

function reducer (state,action){
    switch(action.type){
        case "OPEN_MENU":
            return {
                ...state,
                focus:false,
                menuActive:true,
                openFor: action.openFor,
                menuPosition: action.menuPosition,
            }
        case "EDITING_QUOTE":
            return{
                ...state,
                menuActive:false,
                openFor:null,
                focus:true,
                editingQuote: action.editingQuote

            }
        case "CHANGE_QUOTE":
            return{
                ...state,
                editingQuote: action.resetEditingQuote(state.editingQuote)

            }
        case "DELETE_QUOTE":
                return{
                    ...state,
                    menuActive:false,
                    openFor:null
    
        };
        case "SUBMIT" :
            return{
                ...INITIAL,
                editingQuote: action.resetEditingQuote(state.editingQuote)
            }
        case "RESET_EDITING":
            return{
                editingQuote: action.resetEditingQuote(state.editingQuote),
                ...INITIAL
            }
        default : return INITIAL;
    }
}


export {INITIAL,reducer}