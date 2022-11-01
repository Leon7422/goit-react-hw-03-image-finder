import React from 'react';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends React.Component {
  state = {
    searchItem: '',
    status: 'idle',
  };

  onSubmitForm = searchItem => {
    this.setState({ searchItem });
  };

  render() {
    const { status } = this.state;
    if (status === 'idle') {
      return <SearchBar onSubmitForm={this.onSubmitForm} />;
    }
  }
}
