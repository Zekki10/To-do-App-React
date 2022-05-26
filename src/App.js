import { AddItem } from './Components/AddItem';
import { GlobalStyle } from './Components/GlobalStyle';
import Header from './Components/Header';
import { ItemList } from './Components/ItemList';
import { ThemeSwitch } from './Components/ThemeSwitch';
import { DataProvider } from './Context/DataProvider';
import { useThemeMode } from './Hooks/useThemeMode';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const themes = {
  green: {
    color: '#48D965',
    subColor:'#489964'
  },
  blue: {
    color: '#1965FC',
    subColor:'#3D0DFE'
  },
  dark: {
    color: '#272727',
    subColor:'#454546'
  }
}
const queryClient = new QueryClient()

function App() {
  const [theme, switchTheme] = useThemeMode();

  return (
    <QueryClientProvider client={ queryClient }>
      <DataProvider>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyle />
          <Header />
          <AddItem />
          <ItemList />
          <ThemeSwitch handleClick={switchTheme} />
        </ThemeProvider>
      </DataProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
