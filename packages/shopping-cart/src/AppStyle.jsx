import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  top: 50%;
  left: 50%;
  opacity: 0.5;
  filter: alpha(opacity=50);
  background-color: grey;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
