const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({"apiKey":"eu1-7141-020c-4f3a-b42e-557627695c88"});
var properties;
//send c for creare else update
//send contact id for update
const id ='2001'
//CuContact('c',id);
CuContact('u',id);



 async function CuContact(action,id) {
     if (action =='c'){
try {
     properties = {
        "company": "Biglytics",
        "email": "bonJov2@biglytics.net",
        "firstname": "bon",
        "lastname": "jovi"
      };
    const SimplePublicObjectInput = { properties };
  const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObjectInput);
  console.log(JSON.stringify("contact Id is:"+apiResponse.id, null, 2));
 return JSON.stringify(apiResponse.id,null,2);
  
} catch (e) {
  e.message === 'HTTP request failed'
    ? console.error(JSON.stringify(e.response, null, 2))
    : console.error(e)
}
 }

else{
    try {
         properties = {
            "company": "Biglytics",
            "email": "updateEmail@biglytics.net",
            "firstname": "bon",
            "lastname": "jovi"
          };
        const SimplePublicObjectInput = { properties };
        const contactId = id;
       
            const apiResponse = await hubspotClient.crm.contacts.basicApi.update(contactId, SimplePublicObjectInput);
            console.log(JSON.stringify("contact email change to:"+apiResponse.properties.email, null, 2));
          } catch (e) {
            e.message === 'HTTP request failed'
              ? console.error(JSON.stringify(e.response, null, 2))
              : console.error(e)
          }
        }
    }
        
        