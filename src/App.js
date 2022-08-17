import Form from './api/components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProducts from './api/components/UserProducts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Form />}></Route>
        <Route path={'/products'} element={<UserProducts />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
