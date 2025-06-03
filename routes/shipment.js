const express = require("express");
const Shipment = require("../models/Shipment");
const getShipment = require("../middleware/getShipment");

const router = express.Router();

router.post("/", async (req, res) => {
  const { shipmentId, containerId, routes, location, eta, status } = req.body;
  if (!shipmentId || !containerId || !routes || !location || !eta) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    const newShipment = new Shipment({
      shipmentId,
      containerId,
      routes,
      location,
      eta,
      status,
    });
    await newShipment.save();
    res.status(201).json(newShipment);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", getShipment, (req, res) => {
  res.status(200).json(req.shipment);
});

router.post("/:id/update-location", getShipment, async (req, res) => {
  try {
    req.shipment.location = req.body.location;
    await req.shipment.save();
    res.status(200).json({ message: "Location updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id/eta", getShipment, (req, res) => {
  res.status(200).json({ eta: req.shipment.eta });
});

module.exports = router;
