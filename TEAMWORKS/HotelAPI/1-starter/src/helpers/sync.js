"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */

// SYCHRONIZATION:

const mongoose = require("mongoose");
const User = require("../models/userModel");
const Room = require("../models/roomModel");
const Reservation = require("../models/reservationModel");

module.exports = async function () {
  /* REMOVE DATABASE */
  await mongoose.connection.dropDatabase();
  console.log("- Database and all data DELETED!");
  /* REMOVE DATABASE */

  /* Users & Rooms & Reservations */
  const rooms = [
    {
      roomNumber: 101,
      image: "room101.jpg",
      bedType: "Small Bed",
      price: 100,
    },
    {
      roomNumber: 102,
      image: "room102.jpg",
      bedType: "Medium Bed",
      price: 150,
    },
    {
      roomNumber: 103,
      image: "room103.jpg",
      bedType: "Large Bed",
      price: 200,
    },
  ];

  for (const roomData of rooms) {
    try {
      await Room.create(roomData);
      console.log(`- Room ${roomData.roomNumber} Added.`);
    } catch (err) {
      console.error("Error adding room:", err);
    }
  }

  // Örnek kullanıcılar oluştur
  const users = [
    {
      username: "user1",
      password: "Password1!",
      email: "user1@example.com",
    },
    {
      username: "user2",
      password: "Password2!",
      email: "user2@example.com",
    },
  ];

  for (const userData of users) {
    try {
      await User.create(userData);
      console.log(`- User ${userData.username} Added.`);
    } catch (err) {
      console.error("Error adding user:", err);
    }
  }

  // Örnek rezervasyonlar oluştur
  const reservations = [
    {
      userId: await User.findOne({ username: "user1" }),
      roomId: await Room.findOne({ roomNumber: 101 }),
      arrivalDate: new Date("2023-07-15"),
      departureDate: new Date("2023-07-20"),
      guestNumber: 2,
      night: 5,
      price: 100,
      totalPrice: 500,
    },
    {
      userId: await User.findOne({ username: "user2" }),
      roomId: await Room.findOne({ roomNumber: 102 }),
      arrivalDate: new Date("2023-08-01"),
      departureDate: new Date("2023-08-05"),
      guestNumber: 3,
      night: 4,
      price: 150,
      totalPrice: 600,
    },
  ];

  for (const reservationData of reservations) {
    try {
      await Reservation.create(reservationData);
      console.log(`- Reservation for User ${reservationData.userId} Added.`);
    } catch (err) {
      console.error("Error adding reservation:", err);
    }
  }

  console.log("Synchronized");
};
