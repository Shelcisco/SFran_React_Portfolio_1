import React, {useState} from "react"; 
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [page,setPage] = useState("about");
  return (
    <div className="App">
      <Header page={page} setPage={setPage}/>
      <Main page={page}/>
  <Footer/>
    </div>
  );
}

export default App;
