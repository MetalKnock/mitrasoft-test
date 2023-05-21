import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/pages';
import { store } from 'src/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
