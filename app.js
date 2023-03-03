// app.js

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GitHubStrategy({
  clientID: 3a0e3b7c59e031ab742c,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "https://chrisstewartblog.netlify.app/"
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({ githubId: profile.id }, function (err, user) {
    return done(err, user);
  });
}
));

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
