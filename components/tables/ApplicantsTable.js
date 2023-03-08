import styles from '../../styles/ApplicantsTable.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Typography from '@mui/material/Typography';



function ApplicantsTable() {

  const [applicantsData, setApplicantsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/admin/applicants')
      .then(response => response.json())
      .then(data => {
        console.log(data.allApplicants)
        setApplicantsData(data.allApplicants)
      });
  }, []);

  const applicantRow = applicantsData.map((data, i) => {
    return <TableRow
            key={i}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}
          >
            <TableCell align="center" sx={{ width: 50, fontWeight: 'bold' }}><Avatar alt="Remy Sharp" src="/images/1.jpg" /></TableCell>
            <TableCell align="left" sx={{ width: 100 }}>{data.name.charAt(0).toUpperCase() + data.name.slice(1)} </TableCell>
            <TableCell align="left" sx={{ width: 100 }}>{data.surname} </TableCell>
            <TableCell align="center" sx={{ width: 100 }}><div className={styles.eval}><Image src="/images/eval.png" width={68} height={37} /></div></TableCell>
            <TableCell align="center" sx={{ width: 100 }}> {Math.floor(Math.random() * 26)} </TableCell>
            <TableCell align="center" sx={{ width: 500 }}>actions </TableCell>
          </TableRow>
  });


  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 350 }} aria-label="simple table">
      <TableHead className={styles.tableHead}>
        <TableRow>
        
          <TableCell align="center" sx={{ width: 50}}>Avatar</TableCell>
          <TableCell align="left" sx={{ width: 100 }}>Nom</TableCell>
          <TableCell align="left" sx={{ width: 100 }}>Prénom</TableCell>
          <TableCell align="center" sx={{ width: 100 }}>Evaluation</TableCell>
          <TableCell align="center" sx={{ width: 100 }}>Nb offres postulés</TableCell>
          <TableCell align="center" sx={{ width: 500 }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {applicantRow}
      </TableBody>
    </Table>
  </TableContainer>

  );
}

export default ApplicantsTable;