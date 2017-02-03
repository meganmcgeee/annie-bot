'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = message;

var _detailsMessage = require('./detailsMessage');

var _detailsMessage2 = _interopRequireDefault(_detailsMessage);

var _directionMessage = require('./directionMessage');

var _directionMessage2 = _interopRequireDefault(_directionMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function message(input) {
  return [(0, _directionMessage2.default)(input), (0, _detailsMessage2.default)(input)];
}
//# sourceMappingURL=createMessage.js.map
