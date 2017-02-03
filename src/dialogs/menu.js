import builder from 'botbuilder';

export default [
  session => {
    builder.Prompts.choice(session, `What city are you in, love?`, `New York City|Los Angeles|Chicago`);
  },
  (session, results) => {
    switch (results.response.index) {
      case 0:
        session.beginDialog(`/newYork`);
        break;
      case 1:
        session.beginDialog(`/losAngeles`);
        break;
      case 2:
        session.beginDialog(`/chicago`);
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
