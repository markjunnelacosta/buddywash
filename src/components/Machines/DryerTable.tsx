import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import "./CustomerTable.css";

function Dryer(
  
  dryerNo: number,
  status: string,
  timer:string,
  queue: number,
  useCount: number,

) {
  return { dryerNo,status,timer,queue,useCount};
}

// const rows=[];

export default function AddDryer() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow >
            <TableCell align="center" style={{fontWeight:"bold"}}>Dryer No. </TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Status</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Timer </TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Queue</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Use Count </TableCell>
            

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
