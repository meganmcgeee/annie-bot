/*-----------------------------------------------------------------------------
Annie connects humans in need to resources
-----------------------------------------------------------------------------*/

import applyMiddleware from './applyMiddleware';
import bot from './bot';
import bronxDialog from './dialogs/bronx';
import bronxHealthcareDialog from './dialogs/bronxHealthcare';
import brooklynChildcareAfterschoolDialog from './dialogs/brooklynChildcareAfterschool';
import brooklynChildcareDialog from './dialogs/brooklynChildcare';
import brooklynCounselingDialog from './dialogs/brooklynCounseling';
import brooklynDialog from './dialogs/brooklyn';
import brooklynHealthcareDialog from './dialogs/brooklynHealthcare';
import brooklynShelterDialog from './dialogs/brooklynShelter';
import chicagoDialog from './dialogs/chicago';
import introductionDialog from './dialogs/introduction';
import losAngelesDialog from './dialogs/losAngeles';
import menuDialog from './dialogs/menu';
import newYorkDialog from './dialogs/newYork';

applyMiddleware(bot);

const reloadMenu =
  [`showMenu`, null, { matches: /^(menu|back)/i }];

bot.dialog(`/`, introductionDialog);
bot.dialog(`/menu`, menuDialog).reloadAction(...reloadMenu);
bot.dialog(`/newYork`, newYorkDialog).reloadAction(...reloadMenu);
bot.dialog(`/newYork/bk`, brooklynDialog).reloadAction(...reloadMenu);
bot.dialog(`/newYork/bk/healthcare`, brooklynHealthcareDialog);
bot.dialog(`/newYork/bk/shelter`, brooklynShelterDialog);
bot.dialog(`/newYork/bk/counseling`, brooklynCounselingDialog);
bot.dialog(`/newYork/bk/childcare`, brooklynChildcareDialog).reloadAction(...reloadMenu);
bot.dialog(`/newYork/bk/childcare/afterschool`, brooklynChildcareAfterschoolDialog);
bot.dialog(`/newYork/bx`, bronxDialog).reloadAction(...reloadMenu);
bot.dialog(`/newYork/bx/healthcare`, bronxHealthcareDialog).reloadAction(...reloadMenu);
bot.dialog(`/losAngeles`, losAngelesDialog);
bot.dialog(`/chicago`, chicagoDialog);
