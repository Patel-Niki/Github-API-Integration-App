// src/app.ts
import express from 'express';
import cors from 'cors';
import { githubRoutes } from './routes/githubRoutes';

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Express Server</h1>');
});

// Use the GitHub API routes
app.use('/api/github', githubRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
