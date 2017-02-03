'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _botbuilder = require('botbuilder');

var _botbuilder2 = _interopRequireDefault(_botbuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [session => {
  _botbuilder2.default.Prompts.choice(session, `Love NYC. What borough are you currently in?`, `Brooklyn|Bronx|Manhattan|Queens|Staten Island`);
}, (session, results) => {
  switch (results.response.index) {
    case 0:
      session.beginDialog(`/newYork/bk`);
      break;
    case 1:
      session.beginDialog(`/newYork/bx`);
      break;
    case 2:
      session.beginDialog(`/newYork/man`);
      break;
    case 3:
      session.beginDialog(`/newYork/qns`);
      break;
    case 4:
      session.beginDialog(`/newYork/si`);
      break;
    default:
      session.endDialog();
      break;
  }
}, session => {
  // Reload menu
  session.replaceDialog(`/menu`);
}];
//# sourceMappingURL=newYork.js.map
