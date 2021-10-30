import React from "react";
import { CardBody, CardFooter, CardFooterContainer, CardHead, Container } from "./styles";
import { IoNavigate } from "react-icons/io5";
import { WatherContextProps } from "../../config/types/WatherTypes";

interface WatherCardProps {
  options: WatherContextProps;
}
const WatherCard: React.FC<WatherCardProps> = ({ options }) => {
  const { current, location, forecast } = options;
  return (
    <Container>
      <CardHead>
        <h1>
          {location.name} - {location.region}
          <IoNavigate />
        </h1>
        <h2>{location.tz_id}</h2>
      </CardHead>
      <CardBody>
        <h1>{Math.ceil(current.temp_c)}º</h1>
        <img
          src={`http:${current.condition.icon.replace("64", "128").replace("64", "128")}`}
          alt={current.condition.text}
        />
      </CardBody>
      <CardFooter>
        <CardFooterContainer>
          <h6>{current.condition.text}</h6>
          <h6>
            Máx {Math.ceil(forecast.forecastday[0]?.day.maxtemp_c)}º Min{" "}
            {Math.ceil(forecast.forecastday[0]?.day.mintemp_c)}º
          </h6>
        </CardFooterContainer>
      </CardFooter>
    </Container>
  );
};

export default WatherCard;
