import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';

import { MONGO_DB_URI } from 'config';
import 'models/User';
import authRoutes from 'routes/auth';
import paymentRoutes from 'routes/payment';
import cookieSession from 'services/cookieSession';
import 'services/passport';

mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true });
const app = express();

app.use(bodyParser.json());
app.use(cookieSession);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
paymentRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
