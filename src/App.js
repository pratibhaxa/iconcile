
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Hotel1 from './components/Hotel1';


function App() {
  return (
    <Routes>
      <Route path='/home' element = {<Home/>}></Route>
      <Route path='/signin' element = {<SignIn/>}></Route>
      <Route path='/signup' element = {<SignUp/>}></Route>
      <Route path='/home/1' element = {<Hotel1/>}></Route>
    </Routes>

    /* if signup doesnt work then please use 
    email- test123@gmail.com 
    password -test123@gmail.com 
    on signup page

    */
    );
}

export default App;
