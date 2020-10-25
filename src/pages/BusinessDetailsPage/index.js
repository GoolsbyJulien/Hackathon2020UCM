import React from 'react';

import HomeTab from '../../components/BusinessDetailsTab/HomeTab';
import HoursTab from '../../components/BusinessDetailsTab/HoursTab';

import { homeTabName, homeTabIcon } from '../../components/BusinessDetailsTab/HomeTab';
import { hoursTabName } from '../../components/BusinessDetailsTab/HoursTab';
import PicturesTab from '../../components/BusinessDetailsTab/PicturesTab';
import { picturesTabName, picturesTabIcon } from '../../components/BusinessDetailsTab/PicturesTab';
import BusinessDetailsTabButton from '../../components/BusinessDetailsTabButton';

import './index.css';

class BusinessDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;

    this.state = {
      currTab: homeTabName,
      tabs: {},
    };
  }

  createTabs = () => {
    this.setState({
      tabs: {
        homeTab: {
          name: homeTabName,
          component: <HomeTab id={this.id} currTab={this.state.currTab} />,
          logo: homeTabIcon,
        },

        hoursTab: {
          name: hoursTabName,
          component: <HoursTab id={this.id} currTab={this.state.currTab} />,
          logo: homeTabIcon,
        },
        picturesTab: {
          name: picturesTabName,
          component: <PicturesTab id={this.id} currTab={this.state.currTab} />,
          logo: picturesTabIcon,
        },
      }
    });
  }

  setCurrTab = (tabName) => {
    this.setState({ currTab: tabName });
  }

  componentDidMount() {
    this.createTabs();
  }

  render() {
    return (
      <div className='BusinessDetailsPage'>
        {Object.entries(this.state.tabs).map((tab) => {
          if (tab[1].name !== this.state.currTab) return null;
          return <div className={`BusinessDetailsPageTab`} key={tab[0]}>{tab[1].component}</div>
        })}
        <div className='BusinessDetailsPageTabButtonsContainer'>
          {Object.entries(this.state.tabs).map((tab) => (
            <BusinessDetailsTabButton currTab={this.state.currTab} key={tab[0]} name={tab[1].name} logo={tab[1].logo} setCurrTab={this.setCurrTab} />
          ))}
          <div className='BusinessDetailsPageTabButtonsSpace' />
          <div className='BusinessDetailsPageSubscribe'><div>Subscribe</div></div>
        </div>
      </div>
    )
  }
}

export default BusinessDetailsPage;
