import React from 'react';
import { Searchform, SearchButton, SearchInput, Div } from './Searchbar.styled';

export class SearchBar extends React.Component {
  state = {
    querry: '',
    page: 1,
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, page: 1 });
  };

  submitSearch = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state);
  };
  render() {
    return (
      <Searchform onSubmit={this.submitSearch}>
        <Div>
          <SearchInput
            type="text"
            name="querry"
            onChange={this.handleInputChange}
            value={this.state.querry}
            placeholder="Search images and photos"
          ></SearchInput>
          <SearchButton type="submit"></SearchButton>
        </Div>
      </Searchform>
    );
  }
}
