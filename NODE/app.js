const express = require('express');
const { authenticateToken, app } = require('./authMiddleware');

app.get('/secure', authenticateToken, (req, res) => {
  res.json({ message: 'You have access to this secure route.', user: req.user });
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
