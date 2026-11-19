# Blood Bank Management System using MongoDB

This is a DBMS college project that implements a Blood Bank Management System using MongoDB.

## Technologies Used
- MongoDB
- mongosh / MongoDB Compass

## Database
Database name: `blood_bank_db`

## Collections
- donors
- blood_banks
- blood_units
- donations
- blood_requests
- blood_issues
- staff

## How to Run
1. Install MongoDB Community Server and MongoDB Compass.
2. Open MongoDB Shell using:
   mongosh
3. Run the setup file:
   load("database_setup.js")
4. Insert sample data:
   load("sample_data.js")
5. Run CRUD operations:
   load("crud_operations.js")
6. Run blood availability queries:
   load("blood_inventory_queries.js")
7. Run aggregation queries:
   load("aggregation_queries.js")
8. Run lookup queries:
   load("lookup_queries.js")
9. Create indexes:
   load("indexes.js")
10. Run the blood donation and blood issue workflow:
   load("blood_issue_workflow.js")

## Project Files
- `database_setup.js`: Creates the database and collections
- `sample_data.js`: Inserts sample data
- `crud_operations.js`: Demonstrates Create, Read, Update, and Delete operations
- `blood_inventory_queries.js`: Checks blood availability
- `aggregation_queries.js`: Contains aggregation pipeline queries
- `lookup_queries.js`: Contains $lookup operations
- `indexes.js`: Creates database indexes
- `blood_issue_workflow.js`: Demonstrates donation and blood issue workflow
- `test_cases.md`: Contains test cases and expected outputs
- `ER_Diagram.png` / `ER_Diagram.pdf`: ER diagram

## Team Members
1. Aleina Dabas — 2025UIT3140
2. Yashika — 2025UIT3159
3. Eksha Yadav — 2025UIT3132
