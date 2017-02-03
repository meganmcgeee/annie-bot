import builder from 'botbuilder';

export default [
  session => {
    builder.Prompts.choice(session, `Love NYC. What borough are you currently in?`, `Brooklyn|Bronx|Manhattan|Queens|Staten Island`);
  },
  (session, results) => {
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
  },
  session => {
      // Reload menu
    session.replaceDialog(`/menu`);
  },
];
