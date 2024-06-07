import React, { useState, useEffect } from 'react';
import { storage, db } from '../../firebase'; // Adjust path as necessary
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { doc, collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import { Button, TextField, MenuItem, Select, InputLabel, FormControl, Container, Typography, Box, Snackbar } from '@mui/material';

const UploadSyllabus = () => {
  const [programId, setProgramId] = useState('');
  const [syllabusFile, setSyllabusFile] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const programsSnapshot = await getDocs(collection(db, 'tbl_program'));
        const programsList = programsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPrograms(programsList);
      } catch (error) {
        console.error('Error fetching programs:', error);
        setSnackbarMessage('Error fetching programs. Please try again.');
        setSnackbarOpen(true);
      }
    };

    fetchPrograms();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSyllabusFile(file);
    } else {
      setSyllabusFile(null);
      setSnackbarMessage('Please select a PDF file.');
      setSnackbarOpen(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!programId || !syllabusFile) {
      setSnackbarMessage('All fields are required.');
      setSnackbarOpen(true);
      return;
    }

    try {
      // Check if a syllabus already exists for the selected program
      const syllabusCollectionRef = collection(doc(db, 'tbl_program', programId), 'syllabus');
      const syllabusQuery = query(syllabusCollectionRef);
      const syllabusSnapshot = await getDocs(syllabusQuery);

      // Delete existing syllabus if it exists
      if (!syllabusSnapshot.empty) {
        const existingSyllabusDoc = syllabusSnapshot.docs[0];
        const existingSyllabusData = existingSyllabusDoc.data();
        const existingSyllabusRef = ref(storage, existingSyllabusData.syllabus_file);

        await deleteObject(existingSyllabusRef);
        await deleteDoc(existingSyllabusDoc.ref);
      }

      // Upload the new syllabus file
      const storageRef = ref(storage, `syllabus/${programId}/${syllabusFile.name}`);
      await uploadBytes(storageRef, syllabusFile);
      const downloadURL = await getDownloadURL(storageRef);

      // Save the new syllabus information to Firestore
      await addDoc(syllabusCollectionRef, {
        program_id: programId,
        syllabus_file: downloadURL,
        syllabus_file_name: syllabusFile.name, 
        upload_date: new Date().toISOString(),
      });

      setSnackbarMessage('Syllabus uploaded successfully!');
      setSnackbarOpen(true);
      setProgramId('');
      setSyllabusFile(null);
    } catch (error) {
      console.error('Error uploading syllabus:', error);
      setSnackbarMessage('Error uploading syllabus. Please try again.');
      setSnackbarOpen(true);
    }
  };

  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Upload Syllabus</Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <InputLabel>Program</InputLabel>
            <Select value={programId} onChange={(e) => setProgramId(e.target.value)}>
              {programs.map((program) => (
                <MenuItem key={program.id} value={program.id}>{program.program_name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            type="file"
            accept="application/pdf"
            fullWidth
            margin="normal"
            onChange={handleFileChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Upload Syllabus</Button>
        </form>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default UploadSyllabus;
