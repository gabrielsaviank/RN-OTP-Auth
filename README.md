# One Time Password 

This is a serverless one time password app using phone number. 
Thiss app use Firebase

## Tools Used 

* Firebase 
* Twilio 
* React Native 

## Compiling the Backend

Install Firebase Tools 

_sudo yarn add firebase-tools_

Install libs 

_yarn_

Deploy 

_firebase deploy --project PROJECTNAME-PASSWORD_

## Firebase Setup 

* Register.

* Have a Credit card and subscribe to Blaze Plan.

* Create the project.

* Generate the _firebase.json_

* Store the json at the functions folder.

* Add the json to _.gitignore_ 
there are important info about your account, be careful.

* Curls are generated when you deploy.

## Twilio Setup

* Register.
* Create a Project.
* Generate a Twilio Number.
* Create a filed in the functions folder called _secrets.js_ and add to _.gitignore_
* In the _secrets.js_ create this object: 
const secrets = { "accountSid": "YOUR SID", "authToken": "YOUR TOKEN" };
* Export using ES5. 