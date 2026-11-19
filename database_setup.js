// database_setup.js
// Run this file first in mongosh.

use blood_bank;

db.createCollection("donors");
db.createCollection("donations");
db.createCollection("blood_units");
db.createCollection("hospitals");
db.createCollection("blood_requests");
db.createCollection("issues");
db.createCollection("staff");

print("Database and collections created successfully.");
