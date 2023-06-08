import { createContext, useContext, useReducer } from "react";
import {gql, useQuery} from "@apollo/client";
import ItemsReducer from "@/reducers/items";

const GET_ITEMS = gql`
  query GetItems {
    items {
        type
        template
  }
}
`;

const ItemsContext = createContext(null);

const initialItemsState = {
    isLoading: false,
    isError: false,
    items: [],
};

const ItemsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ItemsReducer, initialItemsState);
    const {loading, error, items} = useQuery(GET_ITEMS);

    dispatch({ type: 'loading', value: loading });
    dispatch({ type: 'error', value: error });
    dispatch({ type: 'items', value: items });

    return (
        <ItemsContext.Provider value={{ ...state }}>
            {children}
        </ItemsContext.Provider>
    );
};

const useItemsContext = () => {
    return useContext(ItemsContext);
};

export { ItemsProvider, ItemsContext, useItemsContext };