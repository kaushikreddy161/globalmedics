import { LogLevel } from '@azure/msal-browser';

export const b2cPolicies = {
    names: {
       signUpSignIn: 'B2C_1_signupsigningm', // loc or pro
      //  signUpSignIn: 'B2C_1_signinsignupdev',
        forgotPassword: 'B2C_1_resetgm',
      //  editProfile: 'B2C_1_edit_profile_v2',
    },
    authorities: {
        signUpSignIn: {
         //  authority: 'https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/B2C_1_signinsignupdev',
           authority: 'https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/B2C_1_signupsigningm',
          // authority: 'https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/B2C_1_signupsigninprod',
        },
         forgotPassword: {
             authority: 'https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/B2C_1_resetgm',
         },
        // editProfile: {
        //     authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile_v2',
        // },
    },
    authorityDomain: 'https://globalmedicsb2c.b2clogin.com',
};

//  const params = new URLSearchParams(window.location.search);
//     const dpl = params.get('dpl');
//     const typ = params.get('typ');
//     console.log("params dpl:", dpl);
//     console.log("params typ:", typ);


export const msalConfig = {
    auth: {
     // clientId: 'b3d34755-317c-4fd2-a004-1cf92ac6f847', // production old
      clientId: 'c61cd9bd-8e87-45fd-a8f2-f2ff2c7cc96b', // Prod and local
     // clientId: '32ddf657-01f9-4f6d-b3cc-21d0a295167f', //  Dev
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};


export const loginRequest = {
    extraQueryParameters : {"campaignId": 'globalMedics-test'},
    //scopes: [],
};

export const silentRequest = {
    scopes: ["openid", "profile"],
    loginHint: "example@domain.net"
};