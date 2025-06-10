const express = require('express');
const app = express();

app.use(express.static('build'));
const path = require('path');

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
  
const port = process.env.PORT || 5000;app.listen(port, () => { console.log(`Server started on port: ${port}`);});
