// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  socialShareOption: [
        {
            title: 'Whatsapp',
            logo: '<i class="fab fa-whatsapp fa-fw"></i>',
            shareType: 'shareViaWhatsApp'
        },
        {
            title: 'Facebook',
            logo: '<i class="fab fa-facebook fa-fw"></i>',
            shareType: 'shareViaFacebook'
        },
        {
            title: 'Twitter',
            logo: '<i class="fab fa-twitter fa-fw"></i>',
            shareType: 'shareViaTwitter'
        },
        {
            title: 'Instagram',
            logo: '<i class="fab fa-instagram fa-fw"></i>',
            shareType: 'shareViaInstagram'
        },
        {
            title: 'Email',
            logo: '<i class="fab fa-envelope fa-fw"></i>',
            shareType: 'viaEmail'
        }
    ],
}; 

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
