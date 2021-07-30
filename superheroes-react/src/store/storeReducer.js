const types = {
    CHANGE_TOKEN : 'CHANGE_TOKEN'
}

const initialStore = {
    token_api: 855471748696658
}

const storeReducer = (state, action) => {
    switch(action.type) {
        case types.CHANGE_TOKEN:
            return {
                ...state,
                token_api: action.payload
            }
        default:
            return state;
    }
}

export { initialStore, types }
export default storeReducer