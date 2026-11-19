// blood_inventory_queries.js
// Queries for checking blood availability.

use blood_bank;

// Find all available O+ whole-blood units
db.blood_units.find({
  blood_group: "O+",
  component: "Whole Blood",
  status: "AVAILABLE"
}).pretty();

// Find all available units of any blood group
db.blood_units.find({
  status: "AVAILABLE"
}).pretty();

// Count available units by blood group
db.blood_units.aggregate([
  {
    $match: {
      status: "AVAILABLE"
    }
  },
  {
    $group: {
      _id: "$blood_group",
      total_units: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      _id: 1
    }
  }
]);

// Find available units with donor details
db.blood_units.aggregate([
  {
    $match: {
      status: "AVAILABLE",
      blood_group: "O+"
    }
  },
  {
    $lookup: {
      from: "donors",
      localField: "donor_id",
      foreignField: "donor_id",
      as: "donor_details"
    }
  },
  {
    $unwind: "$donor_details"
  },
  {
    $project: {
      _id: 0,
      unit_id: 1,
      blood_group: 1,
      component: 1,
      collection_date: 1,
      expiry_date: 1,
      donor_name: "$donor_details.name",
      donor_city: "$donor_details.city"
    }
  }
]);
