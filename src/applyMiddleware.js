import showSessionStackTrace from './showSessionStackTrace';

const dumbassMiddleware = {
  botbuilder(session, next) {
    session.send(`You're a dumbass.`);
    next();
  },
};

export default bot => {
  bot.use(showSessionStackTrace);
  bot.use(dumbassMiddleware);
};
