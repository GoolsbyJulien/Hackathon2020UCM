import axios from 'axios';

export const getBusinesses = async () => {
  const response = await axios.get('http://localhost:8080/api/business/');
  return response;
};

export const getBusinessById = async (id) => {
  const response = await axios.get('http://localhost:8080/api/business/findById', {
    params: { id: parseInt(id) },
  });
  return response;
}

export const signIn = async (email, password) => {
  const response = await axios.post('http://localhost:8080/api/account/', {
    params: {
      email,
      password,
    }
  });
  return response;
}

export const updateBusiness = async (business) => {
  const response = await axios.put('http://localhost:8080/api/business/update/', {
    body: {
      business: {
        id: business.id,
        name: business.name,
        imageFilesList: business.pictures,
        hoursOfOperation: business.hours,
        covidRules: business.covid,
        address: {
          streetAddress: business.streetAddress,
          city: business.city,
          state: business.state,
          zip: business.zip,
        },
      },
      id: business.id,
    },
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  });
  return response;
}
