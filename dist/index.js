'use strict';

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _bot = require('./bot');

var _bot2 = _interopRequireDefault(_bot);

var _bronx = require('./dialogs/bronx');

var _bronx2 = _interopRequireDefault(_bronx);

var _bronxHealthcare = require('./dialogs/bronxHealthcare');

var _bronxHealthcare2 = _interopRequireDefault(_bronxHealthcare);

var _brooklynChildcareAfterschool = require('./dialogs/brooklynChildcareAfterschool');

var _brooklynChildcareAfterschool2 = _interopRequireDefault(_brooklynChildcareAfterschool);

var _brooklynChildcare = require('./dialogs/brooklynChildcare');

var _brooklynChildcare2 = _interopRequireDefault(_brooklynChildcare);

var _brooklynCounseling = require('./dialogs/brooklynCounseling');

var _brooklynCounseling2 = _interopRequireDefault(_brooklynCounseling);

var _brooklyn = require('./dialogs/brooklyn');

var _brooklyn2 = _interopRequireDefault(_brooklyn);

var _brooklynHealthcare = require('./dialogs/brooklynHealthcare');

var _brooklynHealthcare2 = _interopRequireDefault(_brooklynHealthcare);

var _brooklynShelter = require('./dialogs/brooklynShelter');

var _brooklynShelter2 = _interopRequireDefault(_brooklynShelter);

var _chicago = require('./dialogs/chicago');

var _chicago2 = _interopRequireDefault(_chicago);

var _introduction = require('./dialogs/introduction');

var _introduction2 = _interopRequireDefault(_introduction);

var _losAngeles = require('./dialogs/losAngeles');

var _losAngeles2 = _interopRequireDefault(_losAngeles);

var _menu = require('./dialogs/menu');

var _menu2 = _interopRequireDefault(_menu);

var _newYork = require('./dialogs/newYork');

var _newYork2 = _interopRequireDefault(_newYork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _applyMiddleware2.default)(_bot2.default); /*-----------------------------------------------------------------------------
                                               Annie connects humans in need to resources
                                               -----------------------------------------------------------------------------*/

const reloadMenu = [`showMenu`, null, { matches: /^(menu|back)/i }];

_bot2.default.dialog(`/`, _introduction2.default);
_bot2.default.dialog(`/menu`, _menu2.default).reloadAction(...reloadMenu);
_bot2.default.dialog(`/newYork`, _newYork2.default).reloadAction(...reloadMenu);
_bot2.default.dialog(`/newYork/bk`, _brooklyn2.default).reloadAction(...reloadMenu);
_bot2.default.dialog(`/newYork/bk/healthcare`, _brooklynHealthcare2.default);
_bot2.default.dialog(`/newYork/bk/shelter`, _brooklynShelter2.default);
_bot2.default.dialog(`/newYork/bk/counseling`, _brooklynCounseling2.default);
_bot2.default.dialog(`/newYork/bk/childcare`, _brooklynChildcare2.default).reloadAction(...reloadMenu);
_bot2.default.dialog(`/newYork/bk/childcare/afterschool`, _brooklynChildcareAfterschool2.default);
_bot2.default.dialog(`/newYork/bx`, _bronx2.default).reloadAction(...reloadMenu);
_bot2.default.dialog(`/newYork/bx/healthcare`, _bronxHealthcare2.default).reloadAction(...reloadMenu);
_bot2.default.dialog(`/losAngeles`, _losAngeles2.default);
_bot2.default.dialog(`/chicago`, _chicago2.default);
//# sourceMappingURL=index.js.map
