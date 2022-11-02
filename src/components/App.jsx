import React from 'react';
import axios from 'axios';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoaderSpinner } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreButton/LoadMoreButton';

export class App extends React.Component {
  state = {
    page: 1,
    querry: null,
    photos: [],
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.querry !== this.state.querry ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      this.fetchPhotos(this.state.querry, this.state.page);
    }
  }

  async fetchPhotos(querry, page) {
    const options = {
      params: {
        key: '30379658-c35fb17314acd2b2cacdcf3a4',
        q: querry,
        page: page,
        safesearch: true,
      },
    };

    const url = `https:pixabay.com/api/`;
    await axios
      .get(url, options)
      .then(data => {
        if (data.data.hits.length < 1) {
          console.log('ERROR');
          return Promise.reject(new Error('We can not find anything'));
        }

        return this.setState(prevState => ({
          status: 'resolved',
          photos: [...prevState.photos, ...data.data.hits],
        }));
      })
      .catch(e => this.setState({ status: 'rejected' }));
  }

  onSubmitForm = querry => {
    this.setState(querry);
    if (this.state.photos.length > 20) {
      this.setState(prevState => ({ photos: [] }));
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { status } = this.state;
    if (status === 'idle') {
      return <SearchBar onSubmitForm={this.onSubmitForm} />;
    }

    if (status === 'pending') {
      return (
        <>
          <SearchBar onSubmitForm={this.onSubmitForm} />
          <ImageGallery data={this.state.photos} />
          <LoaderSpinner />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <SearchBar onSubmitForm={this.onSubmitForm} />
          <ImageGallery data={this.state.photos} />
          <LoadMoreButton loadMore={this.loadMore} />
        </>
      );
    }

    if (status === 'rejected') {
      return (
        <>
          <SearchBar onSubmitForm={this.onSubmitForm} />
          <div>Sorry, we can not find anything! Please retry your search</div>
        </>
      );
    }
  }
}
