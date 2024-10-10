// server.js
require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes');
// const protectedRoutes = require('./routes/protectedRoutes');

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT || 3000;
// const MONGO_URI = process.env.MONGO_URI;

// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.use('/auth', authRoutes);
// app.use('/api', protectedRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const droneRoutes = require('./routes/droneRoutes');
const missionRoutes = require('./routes/missionRoutes');
const flightRoutes = require('./routes/flightRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/drones', droneRoutes);
app.use('/missions', missionRoutes);
app.use('/flights', flightRoutes);

mongoose.connect('mongodb://localhost:27017/droneDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Server started on port 3000')))
  .catch(err => console.error(err));
