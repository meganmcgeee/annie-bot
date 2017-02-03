'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _botbuilder = require('botbuilder');

var _botbuilder2 = _interopRequireDefault(_botbuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [session => {
  _botbuilder2.default.Prompts.choice(session, `What kind of care do you need?`, `I'm sick. | I'm due for a check-up. | I have an illness (diabetes, HIV). | I need sexual health services.`);
}, (session, results) => {
  switch (results.response.index) {
    case 0:
      session.beginDialog(`/newYork/bx/healthcare/sickvisit`);
      break;
    case 1:
      session.beginDialog(`/newYork/bx/healthcare/checkup`);
      break;
    case 2:
      session.beginDialog(`/newYork/bx/healthcare/illness`);
      break;
    case 3:
      session.beginDialog(`/newYork/bx/healthcare/sexual`);
      break;
    default:
      session.endDialog();
      break;
  }
}, session => {
  // Reload menu
  session.replaceDialog(`/menu`);
}];
//# sourceMappingURL=bronxHealthcare.js.map
