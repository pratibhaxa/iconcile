
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import Hotel1 from './components/Hotel1';
import Hotel2 from './components/Hotel2';
import Hotel from './components/Hotel';


function App() {
  return (
    <Routes>
      <Route path='/home' element = {<Home/>}></Route>
      <Route path='/signin' element = {<SignIn/>}></Route>
      <Route path='/signup' element = {<SignUp/>}></Route>
      {/* <Route path='/home/1' element = {<Hotel1/>}></Route> */}
      {/* <Route path="/hotel" component={Hotel}/>  */}
      {/* <Route path="/hotel/:id" component={Hotel2}/> */}
      {/* <Route path="/users/:id" component={UserPage}/>  */}
      <Route path='/hotel/:hotel_id' Component={Hotel} />



      {/* http://localhost:3000/hotel?hotel_id=001&__firebase_request_key=blablabla */}

    </Routes>

    /* if signup doesnt work then please use 
    email- test123@gmail.com 
    password -test123@gmail.com 
    on signup page

    */
    );
}

export default App;
