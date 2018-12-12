import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path';

import { MONGO_DB_URI } from 'config';
import 'models/Survey';
import 'models/User';
import authRoutes from 'routes/auth';
import paymentRoutes from 'routes/payment';
import surveysRoutes from 'routes/surveys';
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
surveysRoutes(app);

if (process.env.NODE_ENV === 'production') {
  const clientBuildDir = path.resolve(__dirname, '../../client/build');

  app.use(express.static(clientBuildDir));
  app.get('*', (req, res) => res.sendFile(path.resolve(clientBuildDir, 'index.html'))); 
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
