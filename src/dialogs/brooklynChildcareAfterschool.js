import axios from 'axios';
import directionMessage from '../lib/directionMessage';
import filter from 'lodash/fp/filter';
import forEach from 'lodash/fp/forEach';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';

export default [
  session => {
    axios.get(`https://data.ny.gov/resource/mn9z-iqan.json?city=Bronx&region_code=NYCDOH&program_type=GFDC&$limit=5`)
      .then(get(`data`))
      .then(forEach(msg => session.send(msg)));
  },
];
