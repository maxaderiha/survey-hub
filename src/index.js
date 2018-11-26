import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import { MONGO_DB_URI } from 'config';
import 'models/User';
import cookieSession from 'services/cookieSession'; 
import 'services/passport';
import authRoutes from 'routes/auth';

mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true });
const app = express();

app.use(cookieSession);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
