import React from 'react';
import { Searchform, SearchButton, SearchInput, Div } from './Searchbar.styled';

export class SearchBar extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  submitSearch = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.inputValue);
  };
  render() {
    return (
      <Searchform onSubmit={this.submitSearch}>
        <Div>
          <SearchInput
            type="text"
            name="inputValue"
            onChange={this.handleInputChange}
            value={this.state.inputValue}
            placeholder="Search images and photos"
          ></SearchInput>
          <SearchButton type="submit"></SearchButton>
        </Div>
      </Searchform>
    );
  }
}
