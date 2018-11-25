import express from 'express';

import 'services/passport';
import authRoutes from 'routes/auth';

const PORT = process.env.PORT || 5000;

const app = express();

authRoutes(app);

app.listen(PORT);
