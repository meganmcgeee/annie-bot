'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _botbuilder = require('botbuilder');

var _botbuilder2 = _interopRequireDefault(_botbuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [session => {
  _botbuilder2.default.Prompts.choice(session, `What city are you in, love?`, `New York City|Los Angeles|Atlanta`);
}, (session, results) => {
  switch (results.response.index) {
    case 0:
      session.beginDialog(`/newYork`);
      break;
    case 1:
      session.beginDialog(`/losAngeles`);
      break;
    case 2:
      session.beginDialog(`/atlanta`);
      break;
    default:
      session.endDialog();
      break;
  }
}, session => {
  // Reload menu
  session.replaceDialog(`/menu`);
}];
//# sourceMappingURL=menu.js.map
