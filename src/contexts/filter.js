import { createContext, useContext, useReducer, useEffect } from "react";
// import { useItemsContext } from "./items";
import filterReducer from "@/reducers/filter";

const FilterContext = createContext(null);

const initialFilterState = {
    filtered_items: [],
    all_items: [],
    filters: {
        formats: "all",
        faculties: "all"
    },
};

export const FilterContextProvider = ({ children }) => {
    // const { items } = useItemsContext();
    const items = [{format: 'event', faculty: 'music'}, {format: 'performance', faculty: 'art'}];
    const [state, dispatch] = useReducer(filterReducer, initialFilterState);

    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({ type: 'update', payload: { name, value } });
    };

    const clearFilters = () => {
        dispatch({ type: 'clear' });
    };

    useEffect(() => {
        dispatch({ type: 'filter' });
    }, [items, state.filters]);

    useEffect(() => {
        dispatch({ type: 'load', payload: items });
    }, [items]);

    return (
        <FilterContext.Provider
            value={{
                ...state,
                updateFilterValue,
                clearFilters,
            }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};