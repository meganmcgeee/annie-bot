'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _add = require('lodash/fp/add');

var _add2 = _interopRequireDefault(_add);

var _get = require('lodash/fp/get');

var _get2 = _interopRequireDefault(_get);

var _join = require('lodash/fp/join');

var _join2 = _interopRequireDefault(_join);

var _pipe = require('lodash/fp/pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _pluck = require('lodash/fp/pluck');

var _pluck2 = _interopRequireDefault(_pluck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const showCallStack = (0, _pipe2.default)((0, _get2.default)(`sessionState.callstack`), (0, _pluck2.default)(`id`), (0, _join2.default)(`, `), (0, _add2.default)(`*** Call stack: `), console.log);

exports.default = {
  botbuilder(session, next) {
    showCallStack(session);
    next();
  }
};
//# sourceMappingURL=showSessionStackTrace.js.map
