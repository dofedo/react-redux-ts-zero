import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../../state/reducers/combiner";

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;
