import showSessionStackTrace from './showSessionStackTrace';

const dumbassMiddleware = {
  botbuilder(session, next) {
    session.send(`test`);
    next();
  },
};

export default bot => {
  bot.use(showSessionStackTrace);
  bot.use(dumbassMiddleware);
};
