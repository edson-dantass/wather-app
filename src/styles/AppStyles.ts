import styled, { keyframes } from "styled-components";
const opacityAnimation = keyframes`
  to {
    opacity: 1;
  }
`;
export const TopSideNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2em;
  background-color: #0c121e;
  z-index: 2;
  padding: 1em;
  svg {
    font-size: 2em;
    color: #ffc068;
    cursor: pointer;
  }
`;
export const SideNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 350px;

  @media (max-width: 732px) {
    width: 100%;
  }
`;
export const SideNavContent = styled.div`
  padding: 1em;
  background-color: #0c121e;
  height: 100vh;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
  input {
    width: 100%;
    margin-left: 0.5em;
    padding: 0.6em;
    border: none;
    background: #edeef1;
    font-size: 1em;
    border-radius: 0.5em;
    outline: none;
    border: solid #fff 2px;
    &:focus {
      border: solid #5491f5 2px;
    }
  }

  svg {
    color: #ecb75c;
    cursor: pointer;
    font-size: 2em;
  }
`;
export const InputSearch = styled.input`
  position: absolute;
  z-index: 2;
  width: 15em;
  top: 0.8em;
  left: 3.5em;
  padding: 0.6em;
  border: none;
  background: #161d2f;
  color: #fff;
  font-size: 1em;
  border-radius: 0.5em;
  outline: none;
  border: solid #0c121e 2px;
  &:focus {
    border: solid #463c30 2px;
  }
`;
export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  h1 {
    margin: 1em 0;
    color: #2c2d31;
  }
  div {
    width: 30em;
    img {
      width: 100%;
    }
  }
`;
export const LabelCardContainer = styled.div`
  opacity: 0;
  display: flex;
  justify-content: flex-start;
  animation: ${opacityAnimation} 0.3s ease 0.4s forwards;

  h5 {
    margin: 1.2em 0;
    padding: 0.3em 0.8em;
    background-color: #ffc0683d;
    border-radius: 0.4em;
    color: #ffc068;
    font-size: 0.8em;
    font-weight: 400;
  }
`;
export const Forecasts = styled.ul`
  background-color: #463c30;
  border-radius: 0.8em;
  position: relative;
  padding-bottom: 1em;
  animation: intro 0.3s ease forwards;
  opacity: 0;
  list-style: none;
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
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

export const ForecastLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${opacityAnimation} 0.3s ease 0.4s forwards;
  opacity: 0;

  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    color: #fff;
    margin-bottom: 0.3em;
  }
  p {
    font-size: 0.8em;
    color: #fff;
  }
`;
export const ForecastRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${opacityAnimation} 0.3s ease 0.4s forwards;
  opacity: 0;

  h1 {
    color: #fff;
    font-size: 2.5em;
    text-align: center;
  }
  p {
    max-width: 10em;
    color: #fff;
    font-size: 0.8em;
    margin: 0.2em 0;
    text-align: center;
  }
  .box {
    background: #0c121e;
    margin-top: 0.3em;
    padding: 0.3em 0.5em;
    border-radius: 0.2em;
    p {
      font-size: 0.8em;
      font-weight: 500;
      color: #fdbe68;
    }
  }
`;

export const ScrollPaddingRight = styled.div`
  padding-right: 0.6em;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fdbe68;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fdbe68 transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
