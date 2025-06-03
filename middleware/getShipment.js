const Shipment = require("../models/Shipment");

const getShipment = async (req, res, next) => {
  try {
    const shipment = await Shipment.findOne({ shipmentId: req.params.id });
    if (!shipment) {
      return res.status(404).json({ message: "Shipment not found" });
    }
    req.shipment = shipment;
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = getShipment;