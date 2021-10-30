import styled, { keyframes } from "styled-components";
const opacityAnimation = keyframes`
  to {
    opacity: 1;
  }
`;
export const Container = styled.div`
  background-color: #463c30;
  width: 100%;
  border-radius: 0.8em;
  position: relative;
  padding-bottom: 1em;
  animation: intro 0.3s ease forwards;
  opacity: 0;

  @keyframes intro {
    from {
      opacity: 0;
      transform: translateY(10em);
    }
    to {
      opacity: 1;
      transform: translateY(0em);
    }
  }
`;
export const CardHead = styled.div`
  padding: 1em 1em 0.5em 1em;
  animation: ${opacityAnimation} 0.3s ease 0.4s forwards;
  opacity: 0;
  h1 {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    color: #ffffff;
    margin-bottom: 0.3em;
    font-weight: 700;
    svg {
      margin-left: 0.3em;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 0.8em;
    color: #ffffff;
  }
`;
export const CardBody = styled.div`
  animation: ${opacityAnimation} 0.3s ease 0.4s forwards;
  opacity: 0;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-top: -0.3em;
    font-size: 3.5em;
    color: #ffffff;
    font-weight: 500;
  }
  svg {
    color: #eeb95c;
    font-size: 5.5em;
  }
`;
export const CardFooter = styled.div`
  animation: ${opacityAnimation} 0.3s ease 0.4s forwards;
  opacity: 0;
  padding: 0 1em;
`;

export const CardFooterContainer = styled.div`
  background-color: #0c121e;
  border-radius: 0.3em;
  font-size: 1.2em;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h6 {
    font-weight: 500;
    color: #fdbe68;
  }
`;
