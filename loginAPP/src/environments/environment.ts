// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Conexion con la plataforma de firebase
  firebaseConfig:{
    apiKey: "AIzaSyBbcNCGsZBgM70jEcvQ8LK8hEiA0CCy5cg",
    authDomain: "loginapp-43d0a.firebaseapp.com",
    databaseURL: "https://loginapp-43d0a.firebaseio.com",
    projectId: "loginapp-43d0a",
    storageBucket: "loginapp-43d0a.appspot.com",
    messagingSenderId: "366296367139",
    appId: "1:366296367139:web:e0532e2c650daefb"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
