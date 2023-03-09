import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = styled.form`
  border: 1px solid gray;
  width: 80%;
  border-radius: var(--border-radius-input);
`;

const InputSearch = styled.input`
  padding: var(--space1);
  border: none;
  flex: auto;
  width: calc(100% - 40px);
  border-radius: var(--border-radius-input);

  &:focus-visible {
    outline: none;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: var(--space1);
  color: gray;
  width: var(--space2);
`;

interface SearchProps {
  handleChange: (event: any) => void;
}

export const SearchInput = ({ handleChange }: SearchProps) => {
  return (
    <SearchForm>
      <SearchIcon icon={faSearch} />
      <InputSearch type="text" placeholder="Buscar" onChange={handleChange} />
    </SearchForm>
  );
};
