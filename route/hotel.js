const express = require("express");
const router = express.Router();
const hotels = require("../model/Hotel");

// Home page
router.get("/", (req, res) => {
  res.render("index");
});

// List of hotels
router.get("/hotels", (req, res) => {
  res.render("hotels", { hotels });
});

// Hotel detail page
router.get("/hotels/:id", (req, res) => {
  const hotel = hotels.find(h => h.id == req.params.id);
  if (!hotel) return res.status(404).send("Hotel not found");
  res.render("hotelDetail", { hotel });
});

// Booking route
router.post("/book/:id", (req, res) => {
  const hotel = hotels.find(h => h.id == req.params.id);
  if (!hotel) return res.status(404).send("Hotel not found");

  // For now just render success page
  res.render("bookingSuccess", { hotel, user: req.body.name });
});

module.exports = router;
