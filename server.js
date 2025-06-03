const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const Shipment = require('./models/Shipment');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database connected successfully"))
.catch(err => console.log("Database connection error: ", err))

const shipmentRoutes = require('./routes/shipment');

app.use('/api/shipment', shipmentRoutes);

app.get('/api/shipments', async (req, res) => {
    try {
        const shipments = await Shipment.find();
        res.status(200).json(shipments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/api', (req, res) => {
    res.json({ message: "Welcome to the Cargo shipment tracker" });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})