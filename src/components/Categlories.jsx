import styled from "styled-components";
import CategloryItem from "./CategloryItem";
import { categories } from "../data";
import { Mobile, Tablet, Ipad } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div``;
const CategloryList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0 20px;
  margin-bottom: 50px;
  ${Mobile({
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "10px 0",
  })}
  ${Tablet({
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
  })}
  ${Ipad({
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
  })}
`;

const Categlories = () => {
  return (
    <Container>
      <Wrapper>
        <CategloryList>
          {categories.map((item, index) => (
            <CategloryItem item={item} key={item.id} />
          ))}
        </CategloryList>
      </Wrapper>
    </Container>
  );
};

export default Categlories;
