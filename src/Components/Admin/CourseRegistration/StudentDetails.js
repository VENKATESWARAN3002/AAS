import { Paper } from '@mui/material';
import React from 'react';

const StudentDetails = ({ student }) => {
  return (
    <Paper>
      <h2>Student Details</h2>
      <p>Name: {student.std_name}</p>
      <p>Student ID: {student.register_no}</p>
      <p>Email:{student.std_email}</p>
      <p>Batch:{student.academic_year}</p>
      <p>Program: {student.program}</p>
      <p>Department: Computer Science and Engineering</p>
    </Paper>
   );
};
export default StudentDetails;
