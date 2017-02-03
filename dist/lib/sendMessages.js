'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendMessages;

var _forEach = require('lodash/fp/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendMessages(session) {
  return msgs => msgs.forEach((0, _forEach2.default)(msg => session.send(msg)));
}
//# sourceMappingURL=sendMessages.js.map
