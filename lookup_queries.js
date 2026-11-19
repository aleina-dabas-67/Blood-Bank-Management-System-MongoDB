// lookup_queries.js
// Uses $lookup to join related MongoDB collections.

use blood_bank;

// Donation history with donor details
db.donations.aggregate([
  {
    $lookup: {
      from: "donors",
      localField: "donor_id",
      foreignField: "donor_id",
      as: "donor"
    }
  },
  {
    $unwind: "$donor"
  },
  {
    $project: {
      _id: 0,
      donation_id: 1,
      donation_date: 1,
      quantity_ml: 1,
      donor_name: "$donor.name",
      blood_group: "$donor.blood_group"
    }
  }
]);

// Blood units with donor and donation details
db.blood_units.aggregate([
  {
    $lookup: {
      from: "donors",
      localField: "donor_id",
      foreignField: "donor_id",
      as: "donor"
    }
  },
  {
    $unwind: "$donor"
  },
  {
    $lookup: {
      from: "donations",
      localField: "donation_id",
      foreignField: "donation_id",
      as: "donation"
    }
  },
  {
    $unwind: "$donation"
  },
  {
    $project: {
      _id: 0,
      unit_id: 1,
      blood_group: 1,
      status: 1,
      donor_name: "$donor.name",
      donation_date: "$donation.donation_date",
      quantity_ml: "$donation.quantity_ml"
    }
  }
]);

// Issued blood with request, hospital, and unit details
db.issues.aggregate([
  {
    $lookup: {
      from: "blood_requests",
      localField: "request_id",
      foreignField: "request_id",
      as: "request"
    }
  },
  {
    $unwind: "$request"
  },
  {
    $lookup: {
      from: "hospitals",
      localField: "hospital_id",
      foreignField: "hospital_id",
      as: "hospital"
    }
  },
  {
    $unwind: "$hospital"
  },
  {
    $lookup: {
      from: "blood_units",
      localField: "unit_id",
      foreignField: "unit_id",
      as: "unit"
    }
  },
  {
    $unwind: "$unit"
  },
  {
    $project: {
      _id: 0,
      issue_id: 1,
      issue_date: 1,
      unit_id: 1,
      blood_group: "$unit.blood_group",
      request_id: 1,
      hospital_name: "$hospital.name",
      patient_name: "$request.patient_name"
    }
  }
]);
