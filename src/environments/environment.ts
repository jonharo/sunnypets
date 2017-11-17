// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  SENDGRID_API_KEY: "XXXXXXXXXXXX",
  firebase: {
    apiKey: "XXXXXXXXXXXX",
    authDomain: "sunny-pets-184721.firebaseapp.com",
    databaseURL: "https://sunny-pets-184721.firebaseio.com",
    projectId: "sunny-pets-184721",
    storageBucket: "sunny-pets-184721.appspot.com",
    messagingSenderId: "78408200236"
  }
};
