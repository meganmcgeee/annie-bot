'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _bot = require('./bot');

var _bot2 = _interopRequireDefault(_bot);

var _botbuilder = require('botbuilder');

var _botbuilder2 = _interopRequireDefault(_botbuilder);

var _filter = require('lodash/fp/filter');

var _filter2 = _interopRequireDefault(_filter);

var _forEach = require('lodash/fp/forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _get = require('lodash/fp/get');

var _get2 = _interopRequireDefault(_get);

var _map = require('lodash/fp/map');

var _map2 = _interopRequireDefault(_map);

var _showSessionStackTrace = require('./showSessionStackTrace');

var _showSessionStackTrace2 = _interopRequireDefault(_showSessionStackTrace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*-----------------------------------------------------------------------------
HelpHer bot connects humans in need to resources
-----------------------------------------------------------------------------*/

var AIRTABLE_API_KEY = 'keyNJRjM1plBmeRh4';

_bot2.default.use(_showSessionStackTrace2.default);

_bot2.default.dialog('/', [function (session) {
  session.send('Hey, I\'m Annie bot. If you need some help, I\'ve got it. I can give you info about places to stay, free healthcare, food, and safe houses. I can also connect you to someone who can help.');
  session.beginDialog('/menu');
}, function (session, results) {
  session.endConversation('Goodbye until next time...');
}]);

_bot2.default.dialog('/menu', [function (session) {
  _botbuilder2.default.Prompts.choice(session, 'What city are you in, love?', 'New York City |Los Angeles|Chicago');
}, function (session, results) {
  switch (results.response.index) {
    case 0:
      session.beginDialog('/newYork');
      break;
    case 1:
      session.beginDialog('/losAngeles');
      break;
    case 2:
      session.beginDialog('/chicago');
      break;
    default:
      session.endDialog();
      break;
  }
}, function (session) {
  // Reload menu
  session.replaceDialog('/menu');
}]).reloadAction('showMenu', null, { matches: /^(menu|back)/i });
// NYC Services Menu

_bot2.default.dialog('/newYork', [function (session) {
  _botbuilder2.default.Prompts.choice(session, 'Love NYC. What borough are you currently in?', 'Brooklyn |Bronx |Manhattan |Queens |Staten Island');
}, function (session, results) {
  switch (results.response.index) {
    case 0:
      session.beginDialog('/newYork/bk');
      break;
    case 1:
      session.beginDialog('/newYork/bx');
      break;
    case 2:
      session.beginDialog('/newYork/man');
      break;
    case 3:
      session.beginDialog('/newYork/qns');
      break;
    case 4:
      session.beginDialog('/newYork/si');
      break;
    default:
      session.endDialog();
      break;
  }
}, function (session) {
  // Reload menu
  session.replaceDialog('/menu');
}]).reloadAction('showMenu', null, { matches: /^(menu|back)/i });

// NYC Boroughs

// Brooklyn
_bot2.default.dialog('/newYork/bk', [function (session) {
  _botbuilder2.default.Prompts.choice(session, 'Cool, BK. And how can I help you? Right now, I can help with the following:', 'Healthcare|Shelter|Counseling/Safe Spaces|Childcare');
}, function (session, results) {
  switch (results.response.index) {
    case 0:
      session.beginDialog('/newYork/bk/healthcare');
      break;
    case 1:
      session.beginDialog('/newYork/bk/shelter');
      break;
    case 2:
      session.beginDialog('/newYork/bk/counseling');
      break;
    case 3:
      session.beginDialog('/newYork/bk/childcare');
      break;
    default:
      session.endDialog();
      break;
  }
}, function (session) {
  // Reload menu
  session.replaceDialog('/menu');
}]).reloadAction('showMenu', null, { matches: /^(menu|back)/i });

// Brooklyn Healthcare
_bot2.default.dialog('/newYork/bk/healthcare', [function (session) {
  _axios2.default.get('https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Health?api_key=keyNJRjM1plBmeRh4').then((0, _get2.default)('data.records')).then((0, _filter2.default)(function (record) {
    return record.fields.Borough === 'Brooklyn';
  })).then((0, _map2.default)(directionMessage)).then((0, _forEach2.default)(function (msg) {
    return session.send(msg);
  }));
}]);

// Brooklyn Shelter
_bot2.default.dialog('/newYork/bk/shelter', [function (session) {
  _axios2.default.get('https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Shelter?api_key=keyNJRjM1plBmeRh4').then((0, _get2.default)('data.records')).then((0, _filter2.default)(function (record) {
    return record.fields.Borough === 'Brooklyn';
  })).then((0, _map2.default)(directionMessage)).then((0, _forEach2.default)(function (msg) {
    return session.send(msg);
  }));
}]);

// Brooklyn Counseling
_bot2.default.dialog('/newYork/bk/couseling', [function (session) {
  _axios2.default.get('https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Counseling?api_key=keyNJRjM1plBmeRh4').then((0, _get2.default)('data.records')).then((0, _filter2.default)(function (record) {
    return record.fields.Brooklyn === 'Y';
  })).then((0, _map2.default)(directionMessage)).then((0, _forEach2.default)(function (msg) {
    return session.send(msg);
  }));
}]);

// Brooklyn Childcare
_bot2.default.dialog('/newYork/bk/childcare', [function (session) {
  _botbuilder2.default.Prompts.choice(session, 'Childcare, I know all about where to get that kind of help. What type of care do you need help with?', 'After School|Daycare|Family Help| Supplies');
}, function (session, results) {
  switch (results.response.index) {
    case 0:
      session.beginDialog('/newYork/bk/childcare/afterschool');
      break;
    case 1:
      session.beginDialog('/newYork/bk/childcare/daycare');
      break;
    case 2:
      session.beginDialog('/newYork/bk/childcare/family');
      break;
    case 3:
      session.beginDialog('/newYork/bk/childcare/supplies');
      break;
    default:
      session.endDialog();
      break;
  }
}, function (session) {
  // Reload menu
  session.replaceDialog('/menu');
}]).reloadAction('showMenu', null, { matches: /^(menu|back)/i });

_bot2.default.dialog('/newYork/bk/childcare/afterschool', [function (session) {
  _axios2.default.get('https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Childcare?api_key=keyNJRjM1plBmeRh4').then((0, _get2.default)('data.records')).then((0, _filter2.default)(function (record) {
    return record.fields.Borough === 'Brooklyn';
  })).then((0, _map2.default)(directionMessage)).then((0, _forEach2.default)(function (msg) {
    return session.send(msg);
  }));
}]);

// Bronx
_bot2.default.dialog('/newYork/bx', [function (session) {
  _botbuilder2.default.Prompts.choice(session, 'Cool, the Bronx. And how can I help you? Right now, I can help with the following:', 'Healthcare|Shelter|Counseling|Childcare');
}, function (session, results) {
  switch (results.response.index) {
    case 0:
      session.beginDialog('/newYork/bx/healthcare');
      break;
    case 1:
      session.beginDialog('/newYork/bx/shelter');
      break;
    case 2:
      session.beginDialog('/newYork/bx/counseling');
      break;
    case 3:
      session.beginDialog('/newYork/bx/childcare');
      break;
    default:
      session.endDialog();
      break;
  }
}, function (session) {
  // Reload menu
  session.replaceDialog('/menu');
}]).reloadAction('showMenu', null, { matches: /^(menu|back)/i });

// Bronx Healthcare
_bot2.default.dialog('/newYork/bx/healthcare', [function (session) {
  _botbuilder2.default.Prompts.choice(session, 'What kind of care do you need?', 'I\'m sick. | I\'m due for a check-up. | I have an illness (diabetes, HIV). | I need sexual health services.');
}, function (session, results) {
  switch (results.response.index) {
    case 0:
      session.beginDialog('/newYork/bx/healthcare/sickvisit');
      break;
    case 1:
      session.beginDialog('/newYork/bx/healthcare/checkup');
      break;
    case 2:
      session.beginDialog('/newYork/bx/healthcare/illness');
      break;
    case 3:
      session.beginDialog('/newYork/bx/healthcare/sexual');
      break;
    default:
      session.endDialog();
      break;
  }
}, function (session) {
  // Reload menu
  session.replaceDialog('/menu');
}]).reloadAction('showMenu', null, { matches: /^(menu|back)/i });

// Los Angeles
_bot2.default.dialog('/losAngeles', [function (session) {
  session.send('Hey, I love LA. I just don\'t have any info about it yet. Check back soon and I\'ll let you know.');
}]);

// Chicago
_bot2.default.dialog('/chicago', [function (session) {
  session.send('Hey, I love CHI. I just don\'t have any info about it yet. Check back soon and I\'ll let you know.');
}]);

function directionMessage(_ref) {
  var _ref$fields = _ref.fields,
      name = _ref$fields.Name,
      directions = _ref$fields.Directions,
      address = _ref$fields.Address,
      borough = _ref$fields.Borough,
      phone = _ref$fields.Phone,
      services = _ref$fields.Services;

  return 'You can get to ' + name + ' at ' + address + ' by taking the ' + directions + ' They can assist with ' + services + '. If you need more info, you can call ' + phone + '.';
}
//# sourceMappingURL=index.js.map