// sample_data.js
// Run after database_setup.js

use blood_bank;

db.staff.insertMany([
  {
    staff_id: "STF001",
    name: "Ravi Kumar",
    role: "Lab Technician",
    phone: "9876500011",
    email: "ravi@bloodbank.in"
  },
  {
    staff_id: "STF002",
    name: "Sunita Sharma",
    role: "Blood Bank Nurse",
    phone: "9876500022",
    email: "sunita@bloodbank.in"
  }
]);

db.donors.insertMany([
  {
    donor_id: "DON001",
    name: "Aarav Mehta",
    blood_group: "O+",
    date_of_birth: "1998-05-12",
    gender: "Male",
    phone: "9811000011",
    email: "aarav@example.com",
    city: "Delhi",
    last_donation_date: "2026-11-01"
  },
  {
    donor_id: "DON002",
    name: "Priya Nair",
    blood_group: "A+",
    date_of_birth: "2000-08-25",
    gender: "Female",
    phone: "9811000022",
    email: "priya@example.com",
    city: "Delhi",
    last_donation_date: "2026-11-01"
  },
  {
    donor_id: "DON003",
    name: "Rahul Verma",
    blood_group: "B+",
    date_of_birth: "1997-01-19",
    gender: "Male",
    phone: "9811000033",
    email: "rahul@example.com",
    city: "Gurugram",
    last_donation_date: "2026-11-02"
  }
]);

db.donations.insertMany([
  {
    donation_id: "DONA001",
    donor_id: "DON001",
    donation_date: "2026-11-01",
    quantity_ml: 450,
    component: "Whole Blood",
    staff_id: "STF001"
  },
  {
    donation_id: "DONA002",
    donor_id: "DON002",
    donation_date: "2026-11-01",
    quantity_ml: 450,
    component: "Whole Blood",
    staff_id: "STF001"
  },
  {
    donation_id: "DONA003",
    donor_id: "DON003",
    donation_date: "2026-11-02",
    quantity_ml: 450,
    component: "Whole Blood",
    staff_id: "STF002"
  }
]);

// Three 450 ml donations create exactly three blood units.
db.blood_units.insertMany([
  {
    unit_id: "BU001",
    donation_id: "DONA001",
    donor_id: "DON001",
    blood_group: "O+",
    component: "Whole Blood",
    collection_date: "2026-11-01",
    expiry_date: "2026-12-01",
    status: "AVAILABLE",
    storage_location: "Refrigerator A"
  },
  {
    unit_id: "BU002",
    donation_id: "DONA002",
    donor_id: "DON002",
    blood_group: "A+",
    component: "Whole Blood",
    collection_date: "2026-11-01",
    expiry_date: "2026-12-01",
    status: "AVAILABLE",
    storage_location: "Refrigerator A"
  },
  {
    unit_id: "BU003",
    donation_id: "DONA003",
    donor_id: "DON003",
    blood_group: "B+",
    component: "Whole Blood",
    collection_date: "2026-11-02",
    expiry_date: "2026-12-02",
    status: "AVAILABLE",
    storage_location: "Refrigerator B"
  }
]);

db.hospitals.insertMany([
  {
    hospital_id: "HOSP001",
    name: "City Care Hospital",
    city: "Delhi",
    phone: "01140001111",
    address: "Sector 12, Dwarka, Delhi"
  },
  {
    hospital_id: "HOSP002",
    name: "Sunrise Multispeciality Hospital",
    city: "Gurugram",
    phone: "01244000222",
    address: "Sector 45, Gurugram, Haryana"
  }
]);

db.blood_requests.insertMany([
  {
    request_id: "REQ001",
    hospital_id: "HOSP001",
    patient_name: "Patient A",
    blood_group: "O+",
    component: "Whole Blood",
    units_required: 1,
    request_date: "2026-11-05",
    status: "PENDING"
  },
  {
    request_id: "REQ002",
    hospital_id: "HOSP002",
    patient_name: "Patient B",
    blood_group: "A+",
    component: "Whole Blood",
    units_required: 1,
    request_date: "2026-11-06",
    status: "PENDING"
  }
]);

print("Sample data inserted successfully.");
print("Donations: 3 | Blood units created: 3");
