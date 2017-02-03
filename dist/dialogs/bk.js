// bot.dialog(`/newYork/bk`, [
//   session => {
//     builder.Prompts.choice(session, `Cool, BK. And how can I help you? Right now, I can help with the following:`, `Healthcare|Shelter|Community/Safe Spaces|Childcare`);
//   },
//   (session, results) => {
//     switch (results.response.index) {
//       case 0:
//         session.beginDialog(`/newYork/bk/healthcare`);
//         break;
//       case 1:
//         session.beginDialog(`/newYork/bk/shelter`);
//         break;
//       case 2:
//         session.beginDialog(`/newYork/bk/community`);
//         break;
//       case 3:
//         session.beginDialog(`/newYork/bk/childcare`);
//         break;
//       default:
//         session.endDialog();
//         break;
//     }
//   },
//   session => {
//       // Reload menu
//     session.replaceDialog(`/menu`);
//   },
// ]).reloadAction(`showMenu`, null, { matches: /^(menu|back)/i });

// // Brooklyn Healthcare
// bot.dialog(`/newYork/bk/healthcare`, [
//   session => {
//     axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Health?api_key=keyNJRjM1plBmeRh4`)
//       .then(get(`data.records`))
//       .then(filter(record => record.fields.Borough === `Brooklyn`))
//       .then(map(directionMessage))
//       .then(forEach(msg => session.send(msg)));
//   },
// ]);

// // Brooklyn Shelter
// bot.dialog(`/newYork/bk/shelter`, [
//   session => {
//     axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Shelter?api_key=keyNJRjM1plBmeRh4`)
//       .then(get(`data.records`))
//       .then(filter(record => record.fields.Borough === `Brooklyn`))
//       .then(map(directionMessage))
//       .then(forEach(msg => session.send(msg)));
//   },
// ]);
"use strict";
//# sourceMappingURL=bk.js.map
