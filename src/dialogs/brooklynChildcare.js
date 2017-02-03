import builder from 'botbuilder';

export default [
  session => {
    builder.Prompts.choice(session, `Childcare, I know all about where to get that kind of help. What type of care do you need help with?`, `After School|Daycare|Family Help| Supplies`);
  },
  (session, results) => {
    switch (results.response.index) {
      case 0:
        session.beginDialog(`/newYork/bk/childcare/afterschool`);
        break;
      case 1:
        session.beginDialog(`/newYork/bk/childcare/daycare`);
        break;
      case 2:
        session.beginDialog(`/newYork/bk/childcare/family`);
        break;
      case 3:
        session.beginDialog(`/newYork/bk/childcare/supplies`);
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
