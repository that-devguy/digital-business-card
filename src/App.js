import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Interests from "./components/Interests";

function App() {
    return (
        <div className="app--container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App;