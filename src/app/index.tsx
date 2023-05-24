import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from 'src/pages';
import { store } from 'src/store';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  );
}

export default App;
