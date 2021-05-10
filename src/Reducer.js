export const Reducer = (state,action) => {
    switch(action.type){
        case "addtocart":
            let item=state.cart.find(item => item. title===action.payload.title);
            let index = state.cart.indexOf(item);
            let copyCart  = [...state.cart];
            if (item) {
              return({...state, cart: [...state.cart,2]});  
            }
            
            case "removeitem":
                return();
                case "removeall":
                    return ();
                    default:return state;
    }
}