import { useDispatch } from 'react-redux';
export const useToggleDiscount = () => {
    const dispatch = useDispatch();
    return (action: {type:'discount_open' | 'discount_close'})=>dispatch(action);
}
export const useToggleService = () => {
    const dispatch = useDispatch();
    return (action: {type:'service_open' | 'service_close'})=>dispatch(action);
}
