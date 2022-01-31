import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 5px;
`;
const Language = styled.p``;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
`;
const Input = styled.input`
  border: none;
  padding: 5px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  ${Mobile({ display: "none" })}
  ${Tablet({ display: "none" })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 0 25px;
  ${Mobile({ display: "none" })}
`;
const MenuItem = styled.div`
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>LINASHOP</Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
