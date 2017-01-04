import add from 'lodash/fp/add';
import get from 'lodash/fp/get';
import join from 'lodash/fp/join';
import pipe from 'lodash/fp/pipe';
import pluck from 'lodash/fp/pluck';

const showCallStack = pipe(
  get('sessionState.callstack'),
  pluck('id'),
  join(', '),
  add('*** Call stack: '),
  console.log,
);

export default {
  botbuilder(session, next) {
    showCallStack(session);
    next();
  },
};
