import styled from "styled-components";
import {
  LocationOn,
  MailOutline,
  LocalPhone,
  Instagram,
  Facebook,
  Twitter,
  Pinterest,
} from "@mui/icons-material";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 0 10px;
  ${Mobile({ flexDirection: "column", gap: "10px 0" })}
  ${Tablet({ flexDirection: "column", gap: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${Mobile({
    gap: "10px 0",
  })}
  ${Tablet({
    gap: "10px 0",
  })}
`;
const Logo = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;

const Desc = styled.p`
  font-size: 16px;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;
const SocialItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 20px;
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 10px;
`;
const Item = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  display: inline-block;
  width: fit-content;
`;

const Right = styled.div`
  flex: 1;
`;
const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const ContactItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  margin-bottom: 8px;
`;
const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LINASHOP</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialItem bg="#e23f5e">
            <Instagram />
          </SocialItem>
          <SocialItem bg="#344e83">
            <Facebook />
          </SocialItem>
          <SocialItem bg="#53a9e9">
            <Twitter />
          </SocialItem>
          <SocialItem bg="#e20022">
            <Pinterest />
          </SocialItem>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Item>Home</Item>
          <Item>Man Fashion</Item>
          <Item>Accessories</Item>
          <Item>Order Tracking</Item>
          <Item>Wishlist</Item>
          <Item>Cart</Item>
          <Item>Woman Fashion</Item>
          <Item>My Account</Item>
          <Item>Wishlist</Item>
          <Item>Terms</Item>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactList>
          <ContactItem>
            <LocationOn style={{ marginRight: "10px" }} />
            622 Dixie Path , South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />
            contact@lama.dev
          </ContactItem>
          <ContactItem>
            <LocalPhone style={{ marginRight: "10px" }} />
            +1 234 56 78
          </ContactItem>
          <ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </ContactItem>
        </ContactList>
      </Right>
    </Container>
  );
};

export default Footer;
