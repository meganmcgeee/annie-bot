export default function directionMessage({ fields: { Name: name, Directions: directions, Address: address, Phone: phone, Services: services } }) {
  return `You can get to ${name} at ${address} by taking the ${directions} They can assist with ${services}. If you need more info, you can call ${phone}.`;
}
