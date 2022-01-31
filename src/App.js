import "./App.css";
import styled from "styled-components";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductItem from "./pages/ProductItem";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const Container = styled.div`
  padding: 0 15px;
`;

function App() {
  return (
    <Container>
      <Cart />
    </Container>
  );
}

export default App;
