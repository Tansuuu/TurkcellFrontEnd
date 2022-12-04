import { Link, Route, Routes } from 'react-router-dom';
import About from './RouterSample/About';
import Contact from './RouterSample/Contact';
import Homepage from './RouterSample/Homepage';
import NoMatch from './RouterSample/NoMatch';
import ProductDetail from './RouterSample/ProductDetail';
import ProductList from './RouterSample/ProductList';

function App() {
  return (
    <>
      <h1>Site Header</h1>

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
      <h1>Site Footer</h1>
    </>
  );
}

export default App;
