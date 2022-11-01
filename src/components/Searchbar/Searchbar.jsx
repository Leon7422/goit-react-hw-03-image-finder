import React from 'react';
import { Searchform, SearchButton, SearchInput, Div } from './Searchbar.styled';

export class SearchBar extends React.Component {
  state = {
    searchItem: '',
  };

  render() {
    return (
      <Searchform>
        <Div>
          <SearchInput type="text"></SearchInput>
          <SearchButton type="submit"></SearchButton>
        </Div>
      </Searchform>
    );
  }
}
