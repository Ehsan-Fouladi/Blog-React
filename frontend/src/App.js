import {Component} from "react";
import Navbar from "./component/navbar/Navbar";
import Slider from "./component/home/Slider";
import Footer from "./component/footer/footer";
import ArticleList from "./component/detail/ArticleList";
import Detail from "./component/detail/Detail";
import {Routes, Route} from "react-router-dom";
import Notfound from "./component/Notfound/Notfound";

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <div>
                    <Routes>
                        <Route path='/' element={<Slider/>}/>
                        <Route path="list/" element={<ArticleList/>}/>
                        <Route path="list/detail/:id" element={<Detail/>}/>
                        <Route path="*" element={<Notfound/>}/>
                    </Routes>
                </div>
                <Footer/>
            </>
        )
    }
}

export default App