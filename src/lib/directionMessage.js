export default function directionMessage({
  fields: { facility_Name: facility_name,
            Address: address,
            Phone_number: phone_number,
            Services: services,
          } }) {
  return `You can get to ${facility_name} at ${address} by taking the.
           They can assist with ${services}. 
          If you need more info, you can call ${phone_number}.`;
}
