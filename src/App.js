import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import HomePage from "./Modules/Home/HomePage"
import AboutPage from "./Modules/About/AboutPage"
import ContactPage from "./Modules/Contact/ContactPage"
import NewsPage from "./Modules/News/NewsPage"
import ServicesPage from "./Modules/Services/ServicesPage"

function App() {
  return (
     <>
     <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>  
      <Footer />  
     </>
  );
}

export default App;
