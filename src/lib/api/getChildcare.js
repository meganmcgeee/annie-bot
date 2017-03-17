const axios = require(`axios`);
const { get } = require(`lodash/fp`);

axios.get(`https://data.ny.gov/resource/mn9z-iqan.json?city=Bronx&region_code=NYCDOH&program_type=GFDC&$limit=5`)
  .then(get(`data`))
  .then(console.log);
