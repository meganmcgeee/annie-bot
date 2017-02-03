import axios from 'axios';
import directionMessage from '../lib/directionMessage';
import filter from 'lodash/fp/filter';
import forEach from 'lodash/fp/forEach';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';

export default [
  session => {
    axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Childcare?api_key=keyNJRjM1plBmeRh4`)
      .then(get(`data.records`))
      .then(filter(record => record.fields.Borough === `Brooklyn`))
      .then(map(directionMessage))
      .then(forEach(msg => session.send(msg)));
  },
];
