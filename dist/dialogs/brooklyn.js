'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _botbuilder = require('botbuilder');

var _botbuilder2 = _interopRequireDefault(_botbuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [session => {
  _botbuilder2.default.Prompts.choice(session, `Cool, BK. And how can I help you? Right now, I can help with the following:`, `Healthcare|Shelter|Counseling/Safe Spaces|Childcare`);
}, (session, results) => {
  switch (results.response.index) {
    case 0:
      session.beginDialog(`/newYork/bk/healthcare`);
      break;
    case 1:
      session.beginDialog(`/newYork/bk/shelter`);
      break;
    case 2:
      session.beginDialog(`/newYork/bk/counseling`);
      break;
    case 3:
      session.beginDialog(`/newYork/bk/childcare`);
      break;
    default:
      session.endDialog();
      break;
  }
}, session => {
  // Reload menu
  session.replaceDialog(`/menu`);
}];
//# sourceMappingURL=brooklyn.js.map
