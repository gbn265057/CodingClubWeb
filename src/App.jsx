import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Blurb from './Blurb.jsx'
import Card from './Card.jsx'
import Center from './Center.jsx'
import Contact from './Contact.jsx' 
function App() {


  return(
    <>
    <div>
    <Header></Header>
    <div id = "home">
    <Center ></Center>
    </div>
    <div id="proj" className="projects">
    <Blurb data-aos ="fade-up"></Blurb>
    
      <h2>Projects</h2>
    <Card name = "9/9/24 - First Day!" subtext="Puzzles and ciphers! " link ="https://firstday-website.pages.dev/">
    </Card>
    <Card link = "https://drive.google.com/file/d/1hPf2aDMfT5gDCOPNDj3ioyWxND4FGmYA/view" name = "9/16/24 - Paint the Town!" subtext="Painted a window in Downtown Northbrook for our club!"></Card>
    </div>
    <div id = "idea">
      <Contact></Contact>
    </div>
    <Footer></Footer>
    </div>
    </>
  );
   
}

export default App
