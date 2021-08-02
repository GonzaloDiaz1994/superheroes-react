import './App.css';
import Routes from "./routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreProvider from "./store/StoreProvider";

const App = () => {
    return (
        <div className='fontsAll'>
            <StoreProvider>
                <Routes/>
            </StoreProvider>
        </div>
    )
}

export default App;
