export const getBasketTotal = (basket) => (

    basket?.reduce((amount,item) => item.price + amount,0)
)

export const initialState = {
       basket: [],
       user:null
}

// export const actionTypes = {
    
// };


const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case "ADD_TO_BASKET":
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket,action.item]
            }
           
        case "REMOVE_FROM_BASKET":
            //LOGIC for removing item from basket
            return {
                ...state,
                basket: [...state.basket.filter((item) => item.id !== action.id)]
            }

            // break;  
        default:
            return state;    
    }
}


export default reducer;