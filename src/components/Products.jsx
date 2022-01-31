import { ProductPopular } from "../data";
import Product from "./Product";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const Products = () => {
  return (
    <Container>
      {ProductPopular.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
