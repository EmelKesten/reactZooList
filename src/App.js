import './App.css';
import ShowAnimals from './showAnimals/showAnimals';
import { Provider } from 'react-redux'
import { store }from "./userState/store.js";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ShowAnimals />
      </Provider>
    </div>
  );
}

export default App;