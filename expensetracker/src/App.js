import Main from './pages/Main/Main'
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider >
      <div>
        <Main />
      </div>
    </SnackbarProvider>
  );
}

export default App;