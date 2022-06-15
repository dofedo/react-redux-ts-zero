import { Provider } from "react-redux";
import { store } from '../state';
import RepList from "./RepList";

const App = () => {
    return(
        <Provider store={store}>
            <h1>Search for a Package</h1>
            <RepList />
        </Provider>
    )
};

export default App;