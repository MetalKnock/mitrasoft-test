import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'src/store/reducers/rootReducer';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
