'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _filter = require('lodash/fp/filter');

var _filter2 = _interopRequireDefault(_filter);

var _get = require('lodash/fp/get');

var _get2 = _interopRequireDefault(_get);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [session => {
  _axios2.default.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Shelter?api_key=keyNJRjM1plBmeRh4`).then((0, _get2.default)(`data.records`)).then((0, _filter2.default)(record => record.fields.Borough === `Brooklyn`)).then((0, _map2.default)(createMessage)).then(sendMessages(session));
}];
//# sourceMappingURL=brooklynShelter.js.map
