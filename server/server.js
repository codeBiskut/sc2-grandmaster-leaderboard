const express = require('express');
const cors = require('cors');

const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api', taskRoutes);
app.use('/auth', authRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
      console.log(`API running on port ${PORT}!`);
  });
});