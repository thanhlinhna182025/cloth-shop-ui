import styled from "styled-components";
import Anouncement from "../components/Anouncement";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div``;
const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  ${Mobile({
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px 0",
  })}
  ${Tablet({
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px 0",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${Mobile({
    gap: "10px 0",
  })}
`;
const FilterText = styled.span`
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
  ${Mobile({
    margin: "5px",
    minWidth: "118px",
  })}
  ${Tablet({
    margin: "5px",
    minWidth: "118px",
  })}
`;
const Select = styled.select`
  margin-right: 20px;
  padding: 10px;
  border-radius: 3px;
  width: 110px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Anouncement />
      <Navbar />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product :</FilterText>
          <Select>
            <Option disabled seclected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Red</Option>
          </Select>
          <Select>
            <Option disabled seclected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product :</FilterText>
          <Select>
            <Option seclected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (dsc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
