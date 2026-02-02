const express = require('express')
const cors = require("cors")
const app = express()
const eventRoutes = require('./routes/event');
const bookingRoutes = require('./routes/booking');
const adminRoutes = require('./routes/admin');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.use('/api/event', eventRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/admin', adminRoutes);




// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});