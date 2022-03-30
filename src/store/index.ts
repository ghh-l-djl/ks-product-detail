import { createStore, combineReducers } from 'redux';
function discountVisible(isShow = false, action: { type: 'discount_open' | 'discount_close' }) {
    switch (action.type) {
        case 'discount_open':
            isShow = true;
            break
        case 'discount_close':
            isShow = false;
            break;
    }
    return isShow;
}
function serviceVisible(isShow = false, action: { type: 'service_open' | 'service_close' }) {
    switch (action.type) {
        case 'service_open':
            isShow = true;
            break
        case 'service_close':
            isShow = false;
            break;
    }
    return isShow;
}

const reducer = combineReducers({
    discountVisible,
    serviceVisible,
});
export default createStore(reducer);
export type RootState = ReturnType<typeof reducer>;
