import { Outlet, useNavigation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Footer from "./components/Footer/Footer";

function App() {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return (
      <>
        <Header></Header>
        <LoadingPage></LoadingPage>
      </>
    );
  }

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
