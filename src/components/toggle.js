import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    position: relative;
    margin-bottom: 25px;
`
const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 52px;
  height: 26px;
  background-color: ${({ theme }) => theme.toggleBackground};
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background-color: ${({ theme }) => theme.toggleDetail};
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 38px;
  width: 52px;
  height: 26px;
  &:checked + ${Label} {
    background-color: ${({ theme }) => theme.toggleBackground};
    &::after {
      background-color: ${({ theme }) => theme.toggleDetail};
      margin-left: 26px;
    }
  }
`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
          <Wrapper>
            <CheckBox id="checkbox" type="checkbox" onChange={toggleTheme}/>
            <Label htmlFor="checkbox" />
          </Wrapper>
    )
}
export default Toggle