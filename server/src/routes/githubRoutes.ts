// src/routes/githubRoutes.ts
import { Router } from 'express';
import axios from 'axios';

export const githubRoutes = Router();

const GITHUB_API_URL = 'https://api.github.com';

githubRoutes.get('/user/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Error fetching user information' });
  }
});

githubRoutes.get('/repos/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching repositories:', error);
    res.status(500).json({ message: 'Error fetching repositories' });
  }
});
