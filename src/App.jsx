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
    <Card name = "9/23/24 - Introduction to Python and Github" subtext="Created Collatz conjecture in python" link ="https://docs.google.com/presentation/d/1ZtsqtGZKWqgwvfEcOOa8sRXd1WmI4M7TcWcLamOOj1M/edit#slide=id.p"></Card>
    <Card name = "9/30/24 - First Python Project and More GitHub" subtext="Created dice game in python, first push in GitHub" link ="https://github.com/Juhplux/CodingclubMega_repo"></Card>
    <Card name = "11/4/24 - Bebras Challenge!" subtext="Algorithms and other puzzles"></Card>

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
