"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detailsMessage;
function detailsMessage({ fields: { Phone: phone, Services: services, Hours: hours } }) {
  return `They are open ${ hours } and can assist with ${ services }. For more info, they can be reached at ${ phone }.`;
}
//# sourceMappingURL=detailsMessage.js.map
