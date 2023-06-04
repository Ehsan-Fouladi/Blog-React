import {Component} from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Card from "./component/home/Card";
import Footer from "./component/footer/footer";

class App extends Component{
  render() {
    return(
        <>
            <Navbar/>
            <Home/>
            <Card/>
            <Footer/>
        </>
    )
  }
}
export default App