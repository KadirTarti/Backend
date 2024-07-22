"use strict";
const { CustomError } = require("../errors/customError");
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Reservation = require("../models/reservation");
const Passenger = require("../models/passenger");
const processPassengers = require("../helpers/processPassengers");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "List Reservations"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

    let customFilter = {};
    if (!req.user.isAdmin && !req.user.isStaff) {
      //* isAdmin ve isStaff değerlerinin ikisinin de false olması lazım
      customFilter = { createdId: req.user._id };
    }

    const data = await res.getModelList(Reservation, customFilter,["passengers","createdId"]);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Reservation, customFilter),
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Create Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
    req.body.createdId = req.user._id;
    // [
    //   "6694e8b89904ed18fd8ccd3f",
    //   "6694f099503211178a406aac",
    //   {
    //     firstName: "Denemes",
    //     lastName: "1denme",
    //     email: "denemes1@deneme.com",
    //   },
    // ];
    /* Check ID or OBJECT for passengers */
    // let passengerInfos = req.body?.passengers || [],
    //   passengerIds = [],
    //   passenger = {};

    // for (let passengerInfo of passengerInfos) {
    //   if (typeof passengerInfo == "object") {
    //     passenger = await Passenger.findOne({ email: passengerInfo.email }); //* reelde email değil unique olan tckn/passportId
    //     if (!passenger) {
    //       // passengerInfo = { ...passengerInfo, createdId: req.user._id };
    //       Object.assign(passengerInfo, { createdId: req.user._id }); //* passenger create ederken benden createdId değeri bekliyor.

    //       passenger = await Passenger.create(passengerInfo);
    //     }
    //   } else {
    //     //* string olarak id bilgisi gelirse
    //     passenger = await Passenger.findOne({ _id: passengerInfo }); //* id check
    //   }

    //   //* passenger bilgisi varsa passengera ait id bilgisi arraye ekle
    //   if (passenger) passengerIds.push(passenger._id);
    // }
    const passengerIds = await processPassengers(Passenger,req.body?.passengers || [], req.user._id)
    //* bodyye passengersların idlerini ata
    req.body.passengers = passengerIds;

    const data = await Reservation.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Get Single Reservation"
        */
    //* isAdminOrStaffOrOwn
    // if(!req.user.isAdmin && !req.user.isStaff) {
    //   const checkData = await Reservation.findOne({ _id: req.params.id });
    //   // console.log(typeof checkData.createdId); // object
    //   // console.log(typeof req.user._id); // object
    //   if (checkData.createdId?.toString() != req.user._id.toString()) {
    //     throw new CustomError(
    //       "NoPermission! You must be admin or staff or own!",
    //       403
    //     );
    //   }
    // }
    const data = await Reservation.findOne({ _id: req.params.id }).populate(
      "createdId"
    );

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Update Reservation"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                }
            }
        */
    req.body.createdId = req.user._id;
    //* isAdminOrStaffOrOwn
    // if (!req.user.isAdmin && !req.user.isStaff) {
    //   const checkData = await Reservation.findOne({ _id: req.params.id });
    //   if (checkData.createdId?.toString() != req.user._id.toString()) {
    //     throw new CustomError(
    //       "NoPermission! You must be admin or staff or own!",
    //       403
    //     );
    //   }
    // }
    const data = await Reservation.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      new: await Reservation.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Reservations"]
            #swagger.summary = "Delete Reservation"
        */
    const data = await Reservation.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
