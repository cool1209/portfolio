import { useContext } from "react";
import { NavContext } from "./context/NavContext";
import classNames from "classnames";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const { isActive } = useContext(NavContext);

  return (
    <div className={classNames(
      'app',
      {'app_noScroll': isActive}
    )}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
