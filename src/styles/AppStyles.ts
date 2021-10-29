import styled, { keyframes } from "styled-components";
const opacityAnimation = keyframes`
  to {
    opacity: 1;
  }
`;
export const SideNav = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 300px;
`;
export const SideNavContent = styled.div`
  padding: 1em;
  background-color: #0c121e;
  height: 100vh;
  width: 100%;
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
  animation: ${opacityAnimation} 0.3s ease 0.6s forwards;
  opacity: 0;
  display: flex;
  justify-content: flex-start;

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
