import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import 'typeface-nunito'
import PageContent from './components/PageContent';
import PageContent2 from './components/PageContent2';
import Table from './components/Table';
import axios from "axios";

function App() {
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
            <PageContent />
            <PageContent2 />
            {/**PRODUCTS LIST */}
            <h1 className="h3 my-4 text-gray-800">All the products in the Database</h1>
            <Table />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
