import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
