export default function filterReducer(state, action) {
    switch (action.type) {
        case 'load':
            return {
                ...state,
                filtered_items: [...action.payload],
                all_items: [...action.payload],
                filters: { ...state.filters},
            };

        case 'update':
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case 'filter':
            let { all_items } = state;
            let tempFilterProduct = [...all_items];

            const { formats, faculties } = state.filters;

            if (formats !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => formats.includes(curElem.format)
                );
            }

            if (formats !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => faculties.includes(curElem.faculty)
                );
            }

            return {
                ...state,
                filter_products: tempFilterProduct,
            };

        case 'clear':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    formats: "all",
                    faculties: "all"
                },
            };

        default:
            return state;
    }
};