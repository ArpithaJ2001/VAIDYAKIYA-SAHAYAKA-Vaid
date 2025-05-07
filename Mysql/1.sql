create database vaidproject;
use vaidproject;

CREATE TABLE patientDetailss (
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  emailId VARCHAR(100),
  mobileNumber VARCHAR(20),
  password VARCHAR(100),
  gender VARCHAR(10),
  address TEXT,
  age INT,
  bloodGroup VARCHAR(5)
);

select * from patientDetailss;
insert into patientDetailss values ("Arpitha","J","arpitha@gmail.com","9090909090","909090","female",
"Bangalore",24,"A-");

select * from patientDetailss;
delete from patientDetailss where firstName="Arpitha";
DELETE FROM patientDetailss WHERE LOWER(firstName) = "arpitha";

CREATE DATABASE vaid_registration;

USE vaid_registration;

CREATE TABLE patient_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(100),
  middleName VARCHAR(100),
  lastName VARCHAR(100),
  age INT,
  gender VARCHAR(20),
  aadhaarCard VARCHAR(20),
  bplCard VARCHAR(20),
  annualIncome VARCHAR(20),
  bloodType VARCHAR(10),
  illness TEXT,
  duration VARCHAR(50),
  mobileNumber VARCHAR(20),
  alternateNumber VARCHAR(20),
  emailId VARCHAR(100),
  address1 TEXT,
  address2 TEXT,
  address3 TEXT,
  assistantName VARCHAR(100),
  relationToPatient VARCHAR(100),
  assistantTel VARCHAR(20),
  assistantAddress1 TEXT,
  assistantAddress2 TEXT,
  assistantAddress3 TEXT
);

select * from patient_requests;

insert into patient_requests values ("1","ARPITHA ","J","THUMBIGERE",24,"FEMALE","12345678910","123456","50000","A-","HEADACHE","5Days","9380301883","9090909090","arpitha@gmail.com","BANGALORE","DAVANAGERE","SHIVAMOGGA","AMRUTHA J","ELDER SISTER","9449387030","DAVANAGERE","RANEBENNUR","SHIVAMOGGA",'{ "bp": true, "sugar": false, "kidney": true, "thyroid": false, "allergies": true }');

INSERT INTO patient_requests (
  firstName, middleName, lastName, age, gender,
  aadhaarCard, bplCard, annualIncome, bloodType, illness,
  duration, mobileNumber, alternateNumber, emailId,
  address1, address2, address3,
  assistantName, relationToPatient, assistantTel,
  assistantAddress1, assistantAddress2, assistantAddress3,
  complaints
)
VALUES (
  'Arpitha', 'Rao', 'Sharma', 29, 'Female',
  '123456789012', 'BPL123456', '1,50,000', 'O+', 'Diabetes',
  '2 years', '9876543210', '9123456780', 'arpitha@example.com',
  '123 Main Street', 'Apt 4B', 'Bangalore',
  'Rajesh Sharma', 'Brother', '9876501234',
  '456 Side Lane', 'Block C', 'Bangalore',
  '{ "bp": true, "sugar": false, "kidney": true, "thyroid": false, "allergies": true }'
);


select * from patient_requests;

ALTER TABLE patient_requests
ADD complaints JSON;

INSERT INTO patient_requests (
  firstName, middleName, lastName, age, gender,
  aadhaarCard, bplCard, annualIncome, bloodType, illness,
  duration, mobileNumber, alternateNumber, emailId,
  address1, address2, address3,
  assistantName, relationToPatient, assistantTel,
  assistantAddress1, assistantAddress2, assistantAddress3,
  complaints
)
VALUES (
  'Arpitha', 'Rao', 'Sharma', 29, 'Female',
  '123456789012', 'BPL123456', '1,50,000', 'O+', 'Diabetes',
  '2 years', '9876543210', '9123456780', 'arpitha@example.com',
  '123 Main Street', 'Apt 4B', 'Bangalore',
  'Rajesh Sharma', 'Brother', '9876501234',
  '456 Side Lane', 'Block C', 'Bangalore',
  '{ "bp": true, "sugar": false, "kidney": true, "thyroid": false, "allergies": true }'
);


INSERT INTO patient_requests (
  firstName, middleName, lastName, age, gender,
  aadhaarCard, bplCard, annualIncome, bloodType, illness,
  duration, mobileNumber, alternateNumber, emailId,
  address1, address2, address3,
  assistantName, relationToPatient, assistantTel,
  assistantAddress1, assistantAddress2, assistantAddress3,
  complaints
)
VALUES (
  'Sharma', 'Rao', 'Sharma', 29, 'Female',
  '123456789012', 'BPL123456', '1,50,000', 'O+', 'Diabetes',
  '2 years', '9090909090', '9123456780', 'arpitha@example.com',
  '123 Main Street', 'Apt 4B', 'Bangalore',
  'Rajesh Sharma', 'Brother', '9876501234',
  '456 Side Lane', 'Block C', 'Bangalore',
  '{ "bp": true, "sugar": false, "kidney": true, "thyroid": false, "allergies": true }','909090'
);

ALTER TABLE patient_requests
ADD password VARCHAR(20);

INSERT INTO patient_requests (
  firstName, middleName, lastName, age, gender,
  aadhaarCard, bplCard, annualIncome, bloodType, illness,
  duration, mobileNumber, alternateNumber, emailId,
  address1, address2, address3,
  assistantName, relationToPatient, assistantTel,
  assistantAddress1, assistantAddress2, assistantAddress3,
  complaints,
  password
)
VALUES (
  'Sharma', 'Rao', 'Sharma', 29, 'male',
  '123456789012', 'BPL123456', '1,50,000', 'O+', 'Diabetes',
  '2 years', '9090909090', '9123456780', 'arpitha@example.com',
  '123 Main Street', 'Apt 4B', 'Bangalore',
  'Rajesh Sharma', 'Brother', '9876501234',
  '456 Side Lane', 'Block C', 'Bangalore',
  '{ "bp": true, "sugar": false, "kidney": true, "thyroid": false, "allergies": true }',
  '909090'
);


INSERT INTO patient_requests (
  firstName, middleName, lastName, age, gender,
  aadhaarCard, bplCard, annualIncome, bloodType, illness,
  duration, mobileNumber, alternateNumber, emailId,
  address1, address2, address3,
  assistantName, relationToPatient, assistantTel,
  assistantAddress1, assistantAddress2, assistantAddress3,
  complaints,
  password
)
VALUES (
  'Dayana', 'Rao', 'Sharma', 29, 'female',
  '123456789012', 'BPL123456', '1,50,000', 'O+', 'Diabetes',
  '2 years', '8080808080', '9123456780', 'arpitha@example.com',
  '123 Main Street', 'Apt 4B', 'Bangalore',
  'Rajesh Sharma', 'Brother', '9876501234',
  '456 Side Lane', 'Block C', 'Bangalore',
  '{ "bp": true, "sugar": false, "kidney": true, "thyroid": false, "allergies": true }',
  '808080'
);



INSERT INTO patient_requests (
  firstName, middleName, lastName, age, gender,
  aadhaarCard, bplCard, annualIncome, bloodType, illness,
  duration, mobileNumber, alternateNumber, emailId,
  address1, address2, address3,
  assistantName, relationToPatient, assistantTel,
  assistantAddress1, assistantAddress2, assistantAddress3,
  complaints,
  password
)
VALUES (
  'Yamini', 'Rao', 'Sharma', 29, 'male',
  '123456789012', 'BPL123456', '1,50,000', 'O+', 'Diabetes',
  '2 years', '7070707070', '9123456780', 'arpitha@example.com',
  '123 Main Street', 'Apt 4B', 'Bangalore',
  'Rajesh Sharma', 'Brother', '9876501234',
  '456 Side Lane', 'Block C', 'Bangalore',
  '{ "bp": true, "sugar": false, "kidney": true, "thyroid": false, "allergies": true }',
  '707070'
);

select * from patient_requests;


UPDATE patient_requests
SET password = '3210'
WHERE id = 1; 

select * from patient_requests;
