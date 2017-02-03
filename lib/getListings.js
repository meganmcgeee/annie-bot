'use strict';

const axios = require('axios');
const get = require('lodash/fp/get');
const compact = require('lodash/fp/compact');
const map = require('lodash/fp/map');

module.exports.endpoint = (req, res) => {
    axios.get('https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Health?api_key=' + process.env.AIRTABLE_API_KEY).then(get('data.records')).then(map(toFBMessage)).then(compact).then(JSON.stringify).then(msgs => res.end(msgs));

    function toFBMessage({ fields: { Name: name, Address: address, Phone: phone, Borough: borough } }) {
        if (borough === 'Staten Island') {
            return { text: `${name} can be reached at ${phone}` };
        }
    }
};
//# sourceMappingURL=getListings.js.map
