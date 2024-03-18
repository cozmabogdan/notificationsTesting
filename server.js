const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse JSON bodies
app.use(express.json());

// fetch notification
app.get('/', (req, res) => {
    var notification = {
        elevationId : 1,
        username: "Test"
    };

    res.json(notification);
});

//POST requests for notifications
app.post('/', (req, res) => {
    const newNotification = req.body;

    console.log('Received new notification:', newNotification);
    res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
