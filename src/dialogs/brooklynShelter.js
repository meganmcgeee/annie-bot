import axios from 'axios';
import createMessage from '../lib/createMessage';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import sendMessages from '../lib/sendMessages';

export default [
  session => {
    axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Shelter?api_key=keyNJRjM1plBmeRh4`)
      .then(get(`data.records`))
      .then(filter(record => record.fields.Borough === `Brooklyn`))
      .then(map(createMessage))
      .then(sendMessages(session));
  },
];
