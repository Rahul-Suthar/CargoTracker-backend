const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema(
  {
    shipmentId: {
      type: String,
      required: true,
      unique: true,
    },
    containerId: {
      type: String,
      required: true,
    },
    routes: [
      {
        type: String,
        required: true,
      },
    ],
    location: {
      type: String,
      required: true,
    },
    eta: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["In-Transit", "Delivered", "Delayed", "Awaiting Departure"],
      default: "Awaiting Departure",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipment", shipmentSchema);
