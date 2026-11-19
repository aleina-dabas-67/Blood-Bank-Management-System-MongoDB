// aggregation_queries.js
// Aggregation pipelines for inventory and donation reports.

use blood_bank;

// Available blood units grouped by blood group and component
db.blood_units.aggregate([
  {
    $match: {
      status: "AVAILABLE"
    }
  },
  {
    $group: {
      _id: {
        blood_group: "$blood_group",
        component: "$component"
      },
      total_units: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      "_id.blood_group": 1,
      "_id.component": 1
    }
  }
]);

// Total blood collected by each donor
db.donations.aggregate([
  {
    $group: {
      _id: "$donor_id",
      total_quantity_ml: {
        $sum: "$quantity_ml"
      },
      total_donations: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      total_quantity_ml: -1
    }
  }
]);

// Donations handled by each staff member
db.donations.aggregate([
  {
    $group: {
      _id: "$staff_id",
      total_donations: {
        $sum: 1
      },
      total_quantity_ml: {
        $sum: "$quantity_ml"
      }
    }
  },
  {
    $sort: {
      total_donations: -1
    }
  }
]);

// Blood units grouped by status
db.blood_units.aggregate([
  {
    $group: {
      _id: "$status",
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
