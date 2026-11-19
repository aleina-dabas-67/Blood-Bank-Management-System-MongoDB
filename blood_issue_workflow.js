// blood_issue_workflow.js
// Records issue of one available blood unit and updates inventory.

use blood_bank;

// Step 1: Find one available O+ unit
const availableUnit = db.blood_units.findOne({
  blood_group: "O+",
  component: "Whole Blood",
  status: "AVAILABLE"
});

if (availableUnit) {
  // Step 2: Create issue record
  db.issues.insertOne({
    issue_id: "ISS001",
    request_id: "REQ001",
    unit_id: availableUnit.unit_id,
    hospital_id: "HOSP001",
    issue_date: "2026-11-07",
    issued_by: "STF002"
  });

  // Step 3: Mark the selected unit as ISSUED
  db.blood_units.updateOne(
    {
      unit_id: availableUnit.unit_id,
      status: "AVAILABLE"
    },
    {
      $set: {
        status: "ISSUED"
      }
    }
  );

  // Step 4: Mark request as fulfilled
  db.blood_requests.updateOne(
    {
      request_id: "REQ001"
    },
    {
      $set: {
        status: "FULFILLED"
      }
    }
  );

  print("Blood unit " + availableUnit.unit_id + " issued successfully.");
} else {
  print("No available O+ Whole Blood unit found.");
}

// Verify updated inventory
db.blood_units.find({
  status: "AVAILABLE"
}).pretty();

// Verify issue record
db.issues.find().pretty();
