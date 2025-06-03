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
      enum: ["in-transit", "delivered", "pending"],
      default: "in-transit",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shipment", shipmentSchema);
