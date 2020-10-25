import React from 'react';

import HomeTab from '../../components/BusinessDetailsTab/HomeTab';
import { homeTabName, homeTabIcon } from '../../components/BusinessDetailsTab/HomeTab';
// import PicturesTab from '../../components/BusinessDetailsTab/PicturesTab';
// import { picturesTabName, picturesTabIcon } from '../../components/BusinessDetailsTab/PicturesTab';
// import HoursTab from '../../components/BusinessDetailsTab/HoursTab';
// import { hourTabName, hourTabIcon } from '../../components/BusinessDetailsTab/HoursTab';
import CovidTab from '../../components/BusinessDetailsTab/CovidTab';
import { covidTabName, covidTabIcon } from '../../components/BusinessDetailsTab/CovidTab';
import BusinessDetailsTabButton from '../../components/BusinessDetailsTabButton';
import { getBusinessById, getBusinesses } from '../../functions/server';
import history from '../../history';
import Business from '../../classes/Business';

import './index.css';

class BusinessDetailsPage extends React.Component {
  constructor(props) {
    super(props);

    this.id = !this.props.isBusiness ? props.match.params.id : props.id;

    this.state = {
      currTab: homeTabName,
      business: null,
      tabs: {},
      sendInfo: null,
      newBusiness: null,
      message: 'Save',
    };
  }

  updateBusiness = async () => {
    if (!this.props.isBusiness) {
      const response = await getBusinessById(this.id);
      console.log(response);
      if (response.data === null) history.push('/');
      else this.setState({
        business: new Business(
          response.data.id,
          response.data.name,
          response.data.imageFilesList,
          response.data.hoursOfOperation,
          response.data.covidRules,
          response.data.address,
        )
      });
    } else {
      const response = await getBusinesses();
      const business = response.data.find(business => business.account.id === this.id);
      if (!business) {
        this.props.setStateApp({ signedIn: false });
      }
      else {
        this.setState({
          business: new Business(
            business.id,
            business.name,
            business.imageFilesList,
            business.hoursOfOperation,
            business.covidRules,
            business.address,
          ),
          newBusiness: {
            id: business.id,
            name: business.name,
            covid: business.covidRules,
            streetAddress: business.address.streetAddress,
            city: business.address.city,
            state: business.address.state,
            zip: business.address.zip,
          },
        });
      }
    }
  }

  createTabs = () => {
    if (this.state.business !== null)
      this.setState({
        tabs: {
          homeTab: {
            name: homeTabName,
            component: <HomeTab sendInfo={this.setNewBusiness} newBusiness={this.state.newBusiness} business={this.state.business} signedIn={this.props.signedIn} edit={this.props.isBusiness} />,
            logo: homeTabIcon,
            show: true,
          },
          // picturesTab: {
          //   name: picturesTabName,
          //   component: <PicturesTab business={this.state.business} edit={true} />,
          //   logo: picturesTabIcon,
          //   show: this.state.business.getPictures().length > 0,
          // },
          // hoursTab: {
          //   name: hourTabName,
          //   component: <HoursTab business={this.state.business} edit={true} />,
          //   logo: hourTabIcon,
          //   show: this.state.business.getHours().length > 0,
          // },
          covidTab: {
            name: covidTabName,
            component: <CovidTab sendInfo={this.setNewBusiness} newBusiness={this.state.newBusiness} business={this.state.business} edit={this.props.isBusiness} />,
            logo: covidTabIcon,
            show: this.state.business.getCovid().length > 0,
          },
        }
      });
  }

  setCurrTab = (tabName) => {
    this.setState({ currTab: tabName });
  }

  setNewBusiness = (newBusiness) => {
    this.setState({
      newBusiness,
      tabs: {
        homeTab: {
          name: homeTabName,
          component: <HomeTab sendInfo={this.setNewBusiness} newBusiness={newBusiness} business={this.state.business} signedIn={this.props.signedIn} edit={this.props.isBusiness} />,
          logo: homeTabIcon,
          show: true,
        },
        // picturesTab: {
        //   name: picturesTabName,
        //   component: <PicturesTab business={this.state.business} edit={true} />,
        //   logo: picturesTabIcon,
        //   show: this.state.business.getPictures().length > 0,
        // },
        // hoursTab: {
        //   name: hourTabName,
        //   component: <HoursTab business={this.state.business} edit={true} />,
        //   logo: hourTabIcon,
        //   show: this.state.business.getHours().length > 0,
        // },
        covidTab: {
          name: covidTabName,
          component: <CovidTab sendInfo={this.setNewBusiness} newBusiness={newBusiness} business={this.state.business} edit={this.props.isBusiness} />,
          logo: covidTabIcon,
          show: this.state.business.getCovid().length > 0,
        },
      }
    });
  }

  saveInfo = () => {
    this.setState({ message: 'Loading...' }, () => {
      
    });
  }

  async componentDidMount() {
    await this.updateBusiness();
    this.createTabs();
  }

  render() {
    if (!this.props.isBusiness) {
      return (
        <div className='BusinessDetailsPage'>
          {Object.entries(this.state.tabs).map((tab) => {
            if (tab[1].name !== this.state.currTab) return null;
            return <div className={`BusinessDetailsPageTab`} key={tab[0]}>{tab[1].component}</div>
          })}
          <div className='BusinessDetailsPageTabButtonsContainer'>
            {Object.entries(this.state.tabs).map((tab) => {
              if (tab[1].show) return <BusinessDetailsTabButton currTab={this.state.currTab} key={tab[0]} name={tab[1].name} logo={tab[1].logo} setCurrTab={this.setCurrTab} />
              else return false;
            })}
            <div className='BusinessDetailsPageTabButtonsSpace' />
            {this.props.signedIn ? <div className='BusinessDetailsPageSubscribe'><div>Subscribe</div></div> : null}
          </div>
        </div>
      );
    }
    return (
      <div className='BusinessDetailsPage'>
        {Object.entries(this.state.tabs).map((tab) => {
          if (tab[1].name !== this.state.currTab) return null;
          return <div className={`BusinessDetailsPageTab`} key={tab[0]}>{tab[1].component}</div>
        })}
        <div className='BusinessDetailsPageTabButtonsContainer'>
          {Object.entries(this.state.tabs).map((tab) => {
            return <BusinessDetailsTabButton currTab={this.state.currTab} key={tab[0]} name={tab[1].name} logo={tab[1].logo} setCurrTab={this.setCurrTab} />
          })}
          <div className='BusinessDetailsPageTabButtonsSpace' />
          <div className='BusinessDetailsPageSubscribe' onClick={this.saveInfo}><div>Save</div></div>
        </div>
      </div>
    );
  }
}

export default BusinessDetailsPage;
