import React from 'react';

import SearchBar from '../../components/SearchBar';
import Title from '../../components/Title';
import Business from '../../classes/Business';

import './index.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  sendSearchValue = (searchValue) => {
    this.setState({ searchValue });
  }

  getSearches = () => {
    if (this.state.searchValue.length < 3) return null;
    // do stuff based off searchValue
    const results = [new Business('1', 'Home Depot'), new Business('2', 'Walmart')];
    return results.map(business => business.getSearchResult());
  }

  render() {
    return (
      <div className='HomePage'>
        <Title title='Welcome to the COVID-19 Guide!' visible={this.state.searchValue.length < 1} />
        <SearchBar
          value={this.state.searchValue}
          sendValue={this.sendSearchValue}
          placeholder="Type in here to search for a business's COVID information"
        />
        <div className='HomePageResultsList'>
          {this.getSearches()}
        </div>
      </div>
    );
  }
}

export default HomePage;
