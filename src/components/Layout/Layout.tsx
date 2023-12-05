import { GlobalStyle, LayoutContainer } from "./Layout.style";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../../views/Home/Home";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <LayoutContainer className="layout">
        <GlobalStyle />
        <Sidebar />
        <Home />
        <Footer />
    </LayoutContainer>
  )
}
