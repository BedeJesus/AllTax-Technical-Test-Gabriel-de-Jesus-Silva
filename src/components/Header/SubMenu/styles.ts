import styled from "styled-components";

export const Container = styled.div`

  display: none;
  @media(max-width : 700px) {
      display: flex;
  }

.burger {
  position: relative;
  width: 40px;
  height: 30px;
  cursor: pointer;
  
  transition: all .2s;
  display: inline-block;

  :hover {
      transform: translateY(-5px);
    }

    :active {
      transform: translateY(-1px);
    }
  
}

.burger input {
  display: none;
  
  
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: ${props => props.theme.colors.text};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 28px;
  left: 5px;
}

`

export const Box = styled.div`

  background-color: ${props => props.theme.colors.secundary_background};
  opacity: 0.8;
  position:absolute;
  
  height: 14em;
  top: 3.9rem;
  left: 0;
  transition: .3s;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;

`

export const Options = styled.div`

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  text-align: center;
  
    
`



