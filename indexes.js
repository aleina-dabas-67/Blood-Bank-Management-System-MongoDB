// indexes.js
// Creates indexes to improve query performance.

use blood_bank;

// Compound index for blood availability search
db.blood_units.createIndex({
  blood_group: 1,
  component: 1,
  status: 1
});

// Unique indexes for business IDs
db.donors.createIndex({ donor_id: 1 }, { unique: true });
db.donations.createIndex({ donation_id: 1 }, { unique: true });
db.blood_units.createIndex({ unit_id: 1 }, { unique: true });
db.hospitals.createIndex({ hospital_id: 1 }, { unique: true });
db.blood_requests.createIndex({ request_id: 1 }, { unique: true });
db.issues.createIndex({ issue_id: 1 }, { unique: true });
db.staff.createIndex({ staff_id: 1 }, { unique: true });

// Indexes for reference fields
db.donations.createIndex({ donor_id: 1 });
db.blood_units.createIndex({ donation_id: 1 });
db.blood_units.createIndex({ donor_id: 1 });
db.blood_requests.createIndex({ hospital_id: 1 });
db.issues.createIndex({ request_id: 1 });
db.issues.createIndex({ unit_id: 1 });

// Display indexes
print("Indexes on blood_units:");
db.blood_units.getIndexes();

print("Indexes created successfully.");
