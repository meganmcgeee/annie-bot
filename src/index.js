/*-----------------------------------------------------------------------------
HelpHer bot connects humans in need to resources
-----------------------------------------------------------------------------*/

import axios from 'axios';
import bot from './bot';
import builder from 'botbuilder';
import filter from 'lodash/fp/filter';
import forEach from 'lodash/fp/forEach';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import showSessionStackTrace from './showSessionStackTrace';

const AIRTABLE_API_KEY = `keyNJRjM1plBmeRh4`;


bot.use(showSessionStackTrace);

bot.dialog(`/`, [
  session => {
    session.send(`Hey, I'm Annie bot. If you need some help, I've got it. I can give you info about places to stay, free healthcare, food, and safe houses. I can also connect you to someone who can help.`);
    session.beginDialog(`/menu`);
  },
  (session, results) => {
    session.endConversation(`Goodbye until next time...`);
  },
]);

bot.dialog(`/menu`, [
  session => {
    builder.Prompts.choice(session, `What city are you in, love?`, `New York City |Los Angeles|Chicago`);
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
]).reloadAction(`showMenu`, null, { matches: /^(menu|back)/i });
// NYC Services Menu

bot.dialog(`/newYork`, [
  session => {
    builder.Prompts.choice(session, `Love NYC. What borough are you currently in?`, `Brooklyn |Bronx |Manhattan |Queens |Staten Island`);
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
]).reloadAction(`showMenu`, null, { matches: /^(menu|back)/i });

// NYC Boroughs

// Brooklyn
bot.dialog(`/newYork/bk`, [
  session => {
    builder.Prompts.choice(session, `Cool, BK. And how can I help you? Right now, I can help with the following:`, `Healthcare|Shelter|Counseling/Safe Spaces|Childcare`);
  },
  (session, results) => {
    switch (results.response.index) {
      case 0:
        session.beginDialog(`/newYork/bk/healthcare`);
        break;
      case 1:
        session.beginDialog(`/newYork/bk/shelter`);
        break;
      case 2:
        session.beginDialog(`/newYork/bk/counseling`);
        break;
      case 3:
        session.beginDialog(`/newYork/bk/childcare`);
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
]).reloadAction(`showMenu`, null, { matches: /^(menu|back)/i });

// Brooklyn Healthcare
bot.dialog(`/newYork/bk/healthcare`, [
  session => {
    axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Health?api_key=keyNJRjM1plBmeRh4`)
      .then(get(`data.records`))
      .then(filter(record => record.fields.Borough === `Brooklyn`))
      .then(map(message))
      .then(sendMessages(session));
  },
]);

// Brooklyn Shelter
bot.dialog(`/newYork/bk/shelter`, [
  session => {
    axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Shelter?api_key=keyNJRjM1plBmeRh4`)
      .then(get(`data.records`))
      .then(filter(record => record.fields.Borough === `Brooklyn`))
      .then(map(message))
      .then(sendMessages(session));
  },
]);

// Brooklyn Counseling
bot.dialog(`/newYork/bk/couseling`, [
  session => {
    axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Counseling?api_key=keyNJRjM1plBmeRh4`)
      .then(get(`data.records`))
      .then(filter(record => record.fields.Brooklyn === `Y`))
      .then(map(directionMessage))
      .then(forEach(msg => session.send(msg)));
  },
]);

// Brooklyn Childcare
bot.dialog(`/newYork/bk/childcare`, [
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
]).reloadAction(`showMenu`, null, { matches: /^(menu|back)/i });

bot.dialog(`/newYork/bk/childcare/afterschool`, [
  session => {
    axios.get(`https://api.airtable.com/v0/app9xzJDMtX5XYjWJ/Childcare?api_key=keyNJRjM1plBmeRh4`)
      .then(get(`data.records`))
      .then(filter(record => record.fields.Borough === `Brooklyn`))
      .then(map(directionMessage))
      .then(forEach(msg => session.send(msg)));
  },
]);

// Bronx
bot.dialog(`/newYork/bx`, [
  session => {
    builder.Prompts.choice(session, `Cool, the Bronx. And how can I help you? Right now, I can help with the following:`, `Healthcare|Shelter|Counseling|Childcare`);
  },
  (session, results) => {
    switch (results.response.index) {
      case 0:
        session.beginDialog(`/newYork/bx/healthcare`);
        break;
      case 1:
        session.beginDialog(`/newYork/bx/shelter`);
        break;
      case 2:
        session.beginDialog(`/newYork/bx/counseling`);
        break;
      case 3:
        session.beginDialog(`/newYork/bx/childcare`);
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
]).reloadAction(`showMenu`, null, { matches: /^(menu|back)/i });

// Bronx Healthcare
bot.dialog(`/newYork/bx/healthcare`, [
  session => {
    builder.Prompts.choice(session, `What kind of care do you need?`, `I'm sick. | I'm due for a check-up. | I have an illness (diabetes, HIV). | I need sexual health services.`);
  },
  (session, results) => {
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
  },
  session => {
      // Reload menu
    session.replaceDialog(`/menu`);
  },
]).reloadAction(`showMenu`, null, { matches: /^(menu|back)/i });


// Los Angeles
bot.dialog(`/losAngeles`, [
  session => {
    session.send(`Hey, I love LA. I just don't have any info about it yet. Check back soon and I'll let you know.`);
  },
]);


// Chicago
bot.dialog(`/chicago`, [
  session => {
    session.send(`Hey, I love CHI. I just don't have any info about it yet. Check back soon and I'll let you know.`);
  },
]);

function directionMessage({ fields: { Name: name, Directions: directions, Address: address, Borough: borough, Phone: phone, Services: services } }) {
  return `You can get to ${name} at ${address} by taking the ${directions} They can assist with ${services}. If you need more info, you can call ${phone}.`;
}
function detailsMessage({ fields: { Phone: phone, Services: services, Hours: hours } }) {
  return `They are open ${hours} and can assist with ${services}. For more info, they can be reached at ${phone}.`;
}

function message(input) {
  return [directionMessage(input), detailsMessage(input)];
}

function sendMessages(session) {
  return msgs =>
    msgs.forEach(forEach(msg => session.send(msg)));
}
