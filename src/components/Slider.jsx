import styled from "styled-components";
import { useState } from "react";
import { sliderlist } from "../data";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { Button } from "./CustomComponent";
import { Mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 2;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 1.5s ease-in-out;
  ${Mobile({ height: "100%" })}
`;
const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: stretch;
  background-color: ${(props) => props.bg};
  ${Mobile({ flexDirection: "column" })};
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 85%;
  width: 100%;
  ${Mobile({ height: "100%" })};
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  ${Mobile({
    display: "block",
  })};
`;
const Tittle = styled.h3`
  font-size: 35px;
  font-weight: 500;
  text-transform: uppercase;

  ${Mobile({
    fontSize: "25px",
    textAlign: "center",
    marginBottom: "20px",
    lineHeight: "25px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    display: "block",
    textOverflow: "ellipsis",
  })};
`;
const Desc = styled.p`
  font-size: 20px;
  ${Mobile({
    fontSize: "18px",
    marginBottom: "20px",
    display: "block",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "2",
    overflow: "hidden",
  })};
`;
const ButtonColor = styled(Button)`
  border: 1px solid ${(props) => props.bg};
  &:hover,
  :active {
    background-color: #ccc;
  }
  ${Mobile({
    marginTop: "auto",
    textAlign: "center",
    width: "fit-content",
    margin: "0 auto",
    padding: "10px 50px",
  })}
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 3);
    } else {
      setSliderIndex(sliderIndex < 3 ? sliderIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlinedIcon
          style={{ fontSize: "50px", color: "rgba(252,208,89,0.8)" }}
          onClick={() => handleClick("left")}
        />
      </Arrow>
      <Wrapper sliderIndex={sliderIndex}>
        {sliderlist.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.url} />
            </ImageContainer>
            <InfoContainer>
              <Tittle>{item.title}</Tittle>
              <Desc>{item.desc}</Desc>
              <ButtonColor>SHOW NOW</ButtonColor>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon
          style={{ fontSize: "50px", color: "rgba(252,208,89,0.8)" }}
        />
      </Arrow>
    </Container>
  );
};

export default Slider;
