import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function SupplyTable(
  no: number,
  supplyName: string,
  availableStock: number,
  status:string,
  action: string

) {
  return { no, supplyName, availableStock, status, action};
}

// const rows=[];

export default function AddSupply() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell align="center" style={{fontWeight:"bold"}}>No. </TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Supply Name</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Available Stock </TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Status</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Action </TableCell>
            

          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.machineNo}</TableCell>
              <TableCell align="right">{row.machineAction}</TableCell>
               <TableCell align="right">{row.machinTimer}</TableCell>
              <TableCell align="right">{row.dryerNo}</TableCell>
              <TableCell align="right">{row.dryerAction}</TableCell>
              <TableCell align="right">{row.dryerTimer}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}