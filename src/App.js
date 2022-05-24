import './App.css';
import { AddItem } from './Components/AddItem';
import { GlobalStyle } from './Components/GlobalStyle';
import Header from './Components/Header';
import { ItemList } from './Components/ItemList';
import { ThemeSwitch } from './Components/ThemeSwitch';
import { DataProvider } from './Context/DataProvider'




function App() {

  return (
    <DataProvider>
      <GlobalStyle />
      <Header />
      <AddItem />
      <ItemList />
      <ThemeSwitch />
    </DataProvider>

  );
}

export default App;
