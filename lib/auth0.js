import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
    clientId: 'EYIBZOf4HTxJc4cccQuV1AZuchTUpqLn',
    clientSecret: 'wdVJoGhTL1F0Xb1iv4gDr00FCVezrtkVJ-dobOqBVl7z3XZQO4-xTIq611woQvek',
    scope: 'user',
    domain: 'andesdev.auth0.com',
    redirectUri: 'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000',
    session: {
        cookieSecret: 'asdasfasdfsadSFdfdsfsdfsfdasdfsa',
        cookieLifetime: 3600
    }
})