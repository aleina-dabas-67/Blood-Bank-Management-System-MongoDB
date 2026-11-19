// crud_operations.js
// Demonstrates Create, Read, Update, and Delete operations.

use blood_bank;

// CREATE: Insert a new donor
db.donors.insertOne({
  donor_id: "DON004",
  name: "Neha Gupta",
  blood_group: "AB+",
  date_of_birth: "1999-03-14",
  gender: "Female",
  phone: "9811000044",
  email: "neha@example.com",
  city: "Delhi",
  last_donation_date: null
});

// READ: Display all donors
db.donors.find().pretty();

// READ: Find O+ donors
db.donors.find({ blood_group: "O+" }).pretty();

// READ: Find available blood units
db.blood_units.find({ status: "AVAILABLE" }).pretty();

// UPDATE: Update donor contact details
db.donors.updateOne(
  { donor_id: "DON004" },
  {
    $set: {
      phone: "9811000999",
      city: "Noida"
    }
  }
);

// UPDATE: Change storage location of BU003
db.blood_units.updateOne(
  { unit_id: "BU003" },
  {
    $set: {
      storage_location: "Refrigerator A"
    }
  }
);

// DELETE: Remove a request that is not needed
db.blood_requests.deleteOne({ request_id: "REQ002" });

// DELETE: Remove the newly created donor
db.donors.deleteOne({ donor_id: "DON004" });

print("CRUD operations completed successfully.");
