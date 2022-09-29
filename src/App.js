import { AddItem } from './Components/AddItem/AddItem';
import { GlobalStyle } from './Components/GlobalStyle';
import Header from './Components/Header/Header';
import { ItemList } from './Components/ItemList/ItemList';
import  DataProvider from './Context/DataProvider';
import { useThemeMode } from './Hooks/useThemeMode';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider} from 'react-query'
import { themes } from './utils/Themes';

const queryClient = new QueryClient()

function App() {
  const [theme, switchTheme] = useThemeMode();

  return (
    <QueryClientProvider client={ queryClient }>
      <DataProvider>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyle />
          <Header onClick={switchTheme} />
          <AddItem />
          <ItemList />
        </ThemeProvider>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
