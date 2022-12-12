import './App.css';
import HeroPage from './Components/HeroPage/HeroPage';
import Features from "./Components/Features/Features";
import Cta from './Components/Cta/Cta';
import BookFlight from './Components/BookFlight/BookFlight';
import BestTravelers from './Components/BestTravelers/BestTravelers';
import Testimonials from './Components/Testimonials/Testimonials';
import Memories from './Components/Memories/Memories';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <HeroPage/>
      <Features/>
      <Cta/>
      <BookFlight/>
      <BestTravelers/>
      <Testimonials/>
      <Memories/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
