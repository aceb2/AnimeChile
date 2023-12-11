// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = { // Indica que la aplicación se encuentra en modo de producción
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDd-16TWLGqHvqi0RLXXOdgtCmNcEzPyY0", // Clave de API de Firebase
    authDomain: "animechile-724b1.firebaseapp.com", // Dominio de autenticación de Firebase
    projectId: "animechile-724b1",  // ID del proyecto Firebase
    storageBucket: "animechile-724b1.appspot.com", // Bucket de almacenamiento en Firebase
    messagingSenderId: "347051915331",  // ID del remitente de mensajería Firebase
    appId: "1:347051915331:web:61499b7549966ecea23cf6", // ID de la aplicación Firebase
    measurementId: "G-HS8X3KRR2Z"  // ID de medición (Analytics) de Firebase
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
