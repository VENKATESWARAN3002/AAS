import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import {
  Box,
  CircularProgress,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Alert,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  ReferenceLine,
  Label,
  Cell
} from 'recharts';

const AcademicPerformance = () => {
  const { user } = useAuth();
  const [academicPerformances, setAcademicPerformances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAcademicPerformances = async () => {
      try {
        const performances = [];
        const performanceCollectionRef = collection(db, 'tbl_Student', user.id, 'academic_performance');
        const performanceSnapshot = await getDocs(performanceCollectionRef);

        performanceSnapshot.forEach((performanceDoc) => {
          const performanceData = performanceDoc.data();
          performances.push(performanceData);
        });

        setAcademicPerformances(performances);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching academic performances:', error);
        setError('Failed to load academic performances. Please try again later.');
        setLoading(false);
      }
    };

    fetchAcademicPerformances();
  }, [user]);

  const dataForChart = academicPerformances.map((performance, index) => {
    const prevGPA = index > 0 ? academicPerformances[index - 1].gpa : null;
    const currentGPA = performance.gpa;
    let percentageChange = null;

    if (prevGPA !== null) {
      percentageChange = ((currentGPA - prevGPA) / prevGPA) * 100;
    }

    return {
      name: `Semester ${performance.semester}`,
      GPA: currentGPA,
      percentageChange: percentageChange,
      color: `hsl(${index * 30}, 70%, 50%)`,  // Generate different colors
    };
  });

  const getAverageGPA = () => {
    if (academicPerformances.length === 0) return 0;
    const totalGPA = academicPerformances.reduce((sum, perf) => sum + perf.gpa, 0);
    return (totalGPA / academicPerformances.length).toFixed(2);
  };

  const getClassAverageGPA = () => {
    // Assuming a static class average GPA for illustration. This should be fetched from the database.
    return 3.5;
  };

  const getHighestGPA = () => {
    return Math.max(...academicPerformances.map(perf => perf.gpa));
  };

  const getLowestGPA = () => {
    return Math.min(...academicPerformances.map(perf => perf.gpa));
  };

  const getMostImprovedSemester = () => {
    let maxImprovement = 0;
    let mostImprovedSemester = null;

    for (let i = 1; i < academicPerformances.length; i++) {
      const improvement = academicPerformances[i].gpa - academicPerformances[i - 1].gpa;
      if (improvement > maxImprovement) {
        maxImprovement = improvement;
        mostImprovedSemester = academicPerformances[i].semester;
      }
    }

    return mostImprovedSemester;
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  const averageGPA = getAverageGPA();
  const classAverageGPA = getClassAverageGPA();
  const highestGPA = getHighestGPA();
  const lowestGPA = getLowestGPA();
  const mostImprovedSemester = getMostImprovedSemester();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Academic Performance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          {academicPerformances.map((performance, index) => (
            <Card key={index} sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontSize: 14 }}>
                  Semester {performance.semester}
                </Typography>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontSize: 12 }}>Course Code</TableCell>
                      <TableCell sx={{ fontSize: 12 }}>Course Name</TableCell>
                      <TableCell sx={{ fontSize: 12 }}>Grade</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {performance.courses.map((course, idx) => (
                      <TableRow key={idx}>
                        <TableCell sx={{ fontSize: 12 }}>{course.c_code}</TableCell>
                        <TableCell sx={{ fontSize: 12 }}>{course.c_name}</TableCell>
                        <TableCell sx={{ fontSize: 12 }}>{course.grade}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Typography variant="subtitle2" sx={{ mt: 2, fontSize: 14 }}>
                  GPA: {performance.gpa}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: 14 }}>Semester-wise GPA Performance</Typography>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={dataForChart} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" domain={[0, 10]}>
                    <Label value="GPA" angle={-90} position="insideLeft" />
                  </YAxis>
                  <YAxis yAxisId="right" orientation="right">
                    <Label value="Percentage Change" angle={90} position="insideRight" />
                  </YAxis>
                  <Tooltip
                    formatter={(value, name, props) => {
                      if (name === 'percentageChange') {
                        return `${value.toFixed(2)}%`;
                      }
                      return value;
                    }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="GPA" fill="#8884d8">
                    {dataForChart.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                  <Line yAxisId="right" type="monotone" dataKey="percentageChange" stroke="#ff7300" />
                  <ReferenceLine yAxisId="left" y={averageGPA} label="Avg GPA" stroke="green" />
                  <ReferenceLine yAxisId="left" y={classAverageGPA} label="Class Avg" stroke="red" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontSize: 14 }}>Summary</Typography>
              <Typography variant="body2">
                Average GPA: {averageGPA}
              </Typography>
              <Typography variant="body2">
                Class Average GPA: {classAverageGPA}
              </Typography>
              <Typography variant="body2">
                Highest GPA: {highestGPA}
              </Typography>
              <Typography variant="body2">
                Lowest GPA: {lowestGPA}
              </Typography>
              <Typography variant="body2">
                Most Improved Semester: {mostImprovedSemester}
              </Typography>
              <Typography variant="body2">
                Total Semesters: {academicPerformances.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AcademicPerformance;
