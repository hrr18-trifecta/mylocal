import React             from 'react';
import SearchLocationBar from '../containers/SearchLocationBar';
import { connect }       from 'react-redux';

export default class SearchLocation extends React.Component {

  render() {
    return (
      <div className="main-bg">
        <div className="main-bg-text">
          <h1 className="main-text">Where do you want to find it?</h1>
          <hr className="hr" />
          <div className="divider"></div>
          <SearchLocationBar searchTerms={ this.props.searchTerms }/>
          <div className="divider"></div>
        </div>
      </div>
    );
  }
}

var mapStateToProps = function ({ searchTerms }) {
  return { searchTerms }
}

export default connect (mapStateToProps)(SearchLocation);