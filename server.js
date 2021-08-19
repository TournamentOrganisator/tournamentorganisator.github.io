// create Express Server
const express = require('express');
const app = express();
const port = 3000;

// Start Server
app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
});

// Create First Site
app.get('/',function(req,res) {
    res.sendFile('index.html');
  });

