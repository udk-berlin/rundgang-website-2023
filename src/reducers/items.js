export default function ItemsReducer(state, action){
    switch (action.type) {
        case 'loading':
            return {
                ...state,
                isLoading: action.value,
            };
        case 'items':
            return {
                ...state,
                items: action.value,
            };
        case "error":
            return {
                ...state,
                isError: action.value,
            };
        default:
            return state;
    }
};