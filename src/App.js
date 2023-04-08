import './App.css';
import Header from './components/Header';
import Footer from './Footer';
import Flat from './Flat';
import Flatview from './Flatview';
import {Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <Header></Header>

<Routes>
<Route path='/' element={<Flat />}></Route>
<Route path='/view-flat/:id' element={<Flatview></Flatview>}></Route>
</Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
