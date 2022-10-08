import { useMemo } from "react";

import styled from "styled-components";

const StyledMarker = styled.span`
  background-color: yellow;
  font-weight: bolder;
  border-radius: 2px;
`;

const StyledItem = styled.a`
  color: black;
  display: block;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #4c91ba;
    color: white;
  }
  &:hover span {
    color: black;
  }
`;

export const MarkedItem = ({item, query, onClick}) => {

  const {left, center, right} = useMemo(() => getPositions(item, query), [item, query])

  function handleClick (e) {
    onClick(item)
  }
  
  function getPositions(coincidences, string) {
    const index = coincidences.title.toLowerCase().indexOf(string);
    const left = coincidences.title.slice(0, index)
    const right = coincidences.title.slice(index + string.length);
    const center = coincidences.title.slice(index, index + string.length)

    return {
      left,
      center,
      right
    }
  }


  return (
    <StyledItem href="#" onClick={handleClick} >
      {left}
      <StyledMarker>
        {center}
      </StyledMarker>
      {right}
    </StyledItem>
  )
}
