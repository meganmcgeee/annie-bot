

Object.defineProperty(exports, `__esModule`, {
  value: true,
});

let _showSessionStackTrace = require(`./showSessionStackTrace`);

let _showSessionStackTrace2 = _interopRequireDefault(_showSessionStackTrace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

const dumbassMiddleware = {
  botbuilder(session, next) {
    session.send(`test`);
    next();
  },
};

exports.default = bot => {
  bot.use(_showSessionStackTrace2.default);
  bot.use(dumbassMiddleware);
};
// # sourceMappingURL=applyMiddleware.js.map
