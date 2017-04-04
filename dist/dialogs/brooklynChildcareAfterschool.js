'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _directionMessage = require('../lib/directionMessage');

var _directionMessage2 = _interopRequireDefault(_directionMessage);

var _filter = require('lodash/fp/filter');

var _filter2 = _interopRequireDefault(_filter);

var _forEach = require('lodash/fp/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _get = require('lodash/fp/get');

var _get2 = _interopRequireDefault(_get);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [session => {
  _axios2.default.get(`https://data.ny.gov/resource/mn9z-iqan.json?city=Bronx&region_code=NYCDOH&program_type=GFDC&$limit=5`).then((0, _get2.default)(`data`)).then((0, _forEach2.default)(msg => session.send(msg)));
}];
//# sourceMappingURL=brooklynChildcareAfterschool.js.map
