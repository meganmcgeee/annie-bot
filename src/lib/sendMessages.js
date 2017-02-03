import forEach from 'lodash/fp/forEach';

export default function sendMessages(session) {
  return msgs =>
    msgs.forEach(forEach(msg => session.send(msg)));
}
