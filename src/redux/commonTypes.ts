import {useSelector as useReduxSelector, TypedUseSelectorHook,} from 'react-redux'
import { RootState } from 'redux/rootReducer'


export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
