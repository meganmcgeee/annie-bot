export default [
  session => {
    session.send(`Hey, I'm Annie bot. If you need some help, I've got it. I can give you info about places to stay, free healthcare, food, and safe houses. I can also connect you to someone who can help.`);
    session.beginDialog(`/menu`);
  },
  session => {
    session.endConversation(`Goodbye until next time...`);
  },
];
