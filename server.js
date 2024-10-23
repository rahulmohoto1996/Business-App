/* #version=0.0.0-0#3 rm 2024-10-23T16:03:50 710C06C608591541 */
/* #version=0.0.0-0#2 rm 2024-10-23T15:59:15 ADB5241833B58EF7 */
const { auth } = require('express-openid-connect');
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'https://localhost:5000',
  clientID: 'CWLSybrlxQ9TAVDf2r1J8Cd2EY3qDaNb',
  issuerBaseURL: 'https://dev-id4numaxtya1x4bc.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/logout', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});