const types = {
    CHANGE_LAST_ID: 'CHANGE_LAST_ID'
}

const initialStore = {
    last_id: 731
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.CHANGE_LAST_ID:
            return {
                ...state,
                last_id: action.payload
            }
        default:
            return state;
    }
}

export {initialStore, types}
export default storeReducer