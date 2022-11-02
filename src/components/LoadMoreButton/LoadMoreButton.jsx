import React from 'react';
import { LoadMore } from './LoadMoreButton.styled';

export class LoadMoreButton extends React.Component {
  render() {
    return (
      <LoadMore type="button" onClick={this.props.loadMore}>
        LOAD MORE
      </LoadMore>
    );
  }
}
