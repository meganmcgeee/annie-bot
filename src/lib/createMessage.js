import detailsMessage from './detailsMessage';
import directionMessage from './directionMessage';

export default function message(input) {
  return [directionMessage(input), detailsMessage(input)];
}
