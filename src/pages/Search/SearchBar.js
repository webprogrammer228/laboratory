import React from "react";
import styled from "styled-components";
import { SearchBar } from "../../pages/Search/index";

const AppContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
margin-top: 8em;
`;

const SearchElem = () => {

  return (
    <>
    <AppContainer>
      <SearchBar />
    </AppContainer>
    </>
  );
};

export default SearchElem;
