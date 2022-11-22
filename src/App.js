import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Showcase from "./components/Showcase";
import Items from "./components/items";
import ContactUs from "./components/ContactUs";
import TypeFood from "./components/TypeFood";
import AboutUs from "./components/AboutUs";
import CustomerFeedBack from "./components/CustomerFeedBack";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <AboutUs/>
      <TypeFood/>
      <Items/>
      <CustomerFeedBack/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
