'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _botbuilder = require('botbuilder');

var _botbuilder2 = _interopRequireDefault(_botbuilder);

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = _restify2.default.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => console.log(`%s listening at %s`, server.name, server.url));

const connector = new _botbuilder2.default.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

const bot = new _botbuilder2.default.UniversalBot(connector);
server.post(`/api/messages`, connector.listen());

exports.default = bot;
//# sourceMappingURL=bot.js.map
