import '../App.css';
import Footer from './Footer';
import NavBar from './NavBar';
import TopBar from './TopBar';
import 'typeface-nunito'
import ChartsToShow from './ChartsToShow';


function Home() {
  return (
    <div id="wrapper">
      {/** Blue NavBar */}
      <NavBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container-fluid">
            {/** Page Heading  */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <hr></hr>
            {/**PRODUCTS LIST */}
            <h1 className="h3 my-4 text-gray-800">Charts</h1>
            <ChartsToShow />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
