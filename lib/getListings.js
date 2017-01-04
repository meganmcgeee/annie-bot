'use strict';

var axios = require('axios');
var get = require('lodash/fp/get');
var compact = require('lodash/fp/compact');
var map = require('lodash/fp/map');

module.exports.endpoint = function (req, res) {
    axios.get('https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Health?api_key=' + process.env.AIRTABLE_API_KEY).then(get('data.records')).then(map(toFBMessage)).then(compact).then(JSON.stringify).then(function (msgs) {
        return res.end(msgs);
    });

    function toFBMessage(_ref) {
        var _ref$fields = _ref.fields,
            name = _ref$fields.Name,
            address = _ref$fields.Address,
            phone = _ref$fields.Phone,
            borough = _ref$fields.Borough;

        if (borough === 'Staten Island') {
            return { text: name + ' can be reached at ' + phone };
        }
    }
};
//# sourceMappingURL=getListings.js.map