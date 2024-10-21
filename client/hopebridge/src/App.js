import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './user/Home';



import Navbar from './user/Navbar';
import Contact from './user/Contact';
import Footer from './user/Footer';
import About from './user/About';

import Login from './user/Login';
import Register from './user/Register';
import Donate from './user/DonateNow';
import Gallery from './user/Gallery';
import Food from './user/Food';
import Dog from './user/Dogs';
import Rhome from './Receipient/Home';
import Headers from './Receipient/Header';
import Dashboard from './Receipient/Chart';
import Add from './Receipient/Add';
import Logins from './Receipient/Login';
import View from './Receipient/View';
import ViewSubmission from './Receipient/ViewSubmission';
import AgentRegiter from './Receipient/Register';
import  ReceipientLogin  from './Receipient/Login'
import Rsidebar from './Receipient/Rsidebar';
import Dress from './Receipient/Dress';
import RFood from './Receipient/Food';

import Orphangecharity from './Receipient/Orphangecharity';
import Addedit from './Receipient/AddEdit';
import FoodEdit from './Receipient/Foodedit';
import Dressedit from './Receipient/Dressedit';
import Orphangecharityedit from './Receipient/Orphangecharityedit';
import DonnationRequest from './Receipient/DonnationRequest';
import Notify from './Receipient/Notification';
import OrphanDonnation from './user/OrphanDonnation';



import Adminhome from './Admin/Adminhome';
import Adminsidebar from './Admin/Adminsidebar';
import Adminheader from './Admin/Adminheader';
import Profile from './user/Profile';
import DonationTracking from './Receipient/DonnationTracking';


function App() {
  
  

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/header' element={<Navbar/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>

    
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/donate' element={<Donate/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/food' element={<Food/>}/>
    <Route path='/dog' element={<Dog/>}/>
    <Route path='/orphandonnaition' element={<OrphanDonnation/>}/>
    
    {/* Receipient */}
    <Route path='/rhome' element={<Rhome/>}/>
    <Route path='/rhead' element={<Headers/>}/>
    <Route path='/dash' element={<Dashboard/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/logins' element={<Logins/>}/>
    <Route path='/view' element={<View/>}/>
    <Route path='/totalsubmission' element={<ViewSubmission/>}/>
    <Route path='/donnationrequest' element={<DonnationRequest/>}/>
    <Route path='/notifications' element={<Notify/>}/>
    <Route path='/recepientreg' element={<AgentRegiter/>}/>
    <Route path='/recepientlogin' element={<ReceipientLogin/>}/>
    <Route path='/recepientsidebar' element={<Rsidebar/>}/>
    <Route path='/dressform' element={<Dress/>}/>
    <Route path='/foodform' element={<RFood/>}/>
    <Route path='/orphangeform' element={<Orphangecharity/>}/>
    <Route path='/addedit' element={<Addedit/>}/>
    <Route path='/foodedit' element={<FoodEdit/>}/>
    <Route path='/dressedit' element={<Dressedit/>}/>
    <Route path='/orphangeedit' element={<Orphangecharityedit/>}/>
    <Route path='/donnationtracking' element={<DonationTracking/>}/>

   //Admin

   <Route path='/admin' element={<Adminhome/>}/>
   <Route path='/adminsidebar' element={<Adminsidebar/>}/>
   <Route path='/adminheader' element={<Adminheader/>}/>









    </Routes>
    </BrowserRouter>
  );
}

export default App;
