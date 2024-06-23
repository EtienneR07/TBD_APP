// Import required modules
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const sessionSecret = process.env.SESSION_SECRET || 'default_session_secret';
const googleClientId = process.env.GOOGLE_CLIENT_ID || 'default_google_id';
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || 'default_google_client_secret';

// Configure express-session middleware
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure Google OAuth 2.0 Strategy
passport.use(new GoogleStrategy({
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: 'http://localhost:3000/auth/google/callback', // Adjust URL as per your setup
},
    (accessToken, refreshToken, profile, done) => {
        // Here you can save or retrieve user profile information
        // This function is called when authentication succeeds
        return done(null, profile);
    }));

// Serialize user into the session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((obj: any, done) => {
    done(null, obj);
});

// Routes for Google OAuth authentication
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect to frontend or respond with token
        res.redirect('http://localhost:3000'); // Redirect to your frontend URL
    });

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
