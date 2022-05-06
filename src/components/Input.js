import React from "react";
import { SearchInput, SearchInputContainer } from "../styles/SearchInput.style";

const Input = () => {
  return (
    <div>
      <SearchInputContainer>
        <SearchInput placeholder="search player" type="text"></SearchInput>
      </SearchInputContainer>
    </div>
  );
};

export default Input;
