import React from "react";
import { CardBody, CardFooter, CardFooterContainer, CardHead, Container } from "./styles";
import { IoNavigate, IoPartlySunny } from "react-icons/io5";

const WatherCard: React.FC = () => {
  return (
    <Container>
      <CardHead>
        <h1>
          Fortaleza <IoNavigate />
        </h1>
        <h2>Rua teodoro de castro 766</h2>
      </CardHead>
      <CardBody>
        <h1>32º</h1>
        <IoPartlySunny />
      </CardBody>
      <CardFooter>
        <CardFooterContainer>
          <h6>Ensolarado</h6>
          <h6>Máx 33º Min 25º</h6>
        </CardFooterContainer>
      </CardFooter>
    </Container>
  );
};

export default WatherCard;
