import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { GetAll } from '../../../Services/User-Service';





export default function AdminTable() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const loadUsers = async () => {
      const allUsers = await GetAll()
      setUsers(allUsers)
    }
    loadUsers()


  }, []);

  function createData(Position, FirstName, Rank, Role) {
    return { Position, FirstName, Rank, Role };
  }

  const rows = [
    createData(users.Position),
    createData(users.FirstName),
    createData(users.Rank),
    createData(users.Role),
  ];

  // const fillArray = ()=>{
  //   users.forEach(user => {
  //     rows.push(createData(user.Position, user.FirstName, user.Rank, user.Role),)
  //     return rows;
  // }
  





    return (
      // <>
      //   {users.map((user) => {
      //     return <li>{user.FirstName}</li>
      //   })}</>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell class={"rowsTable"} align="center">Position</TableCell>
              <TableCell class={"rowsTable"} align="center">FirstName</TableCell>
              <TableCell class={"rowsTable"} align="center">LastName</TableCell>
              <TableCell class={"rowsTable"} align="center">Rank</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user,i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">{user.Position}</TableCell>
                <TableCell align="center">{user.FirstName}</TableCell>
                <TableCell align="center">{user.LastName}</TableCell>
                <TableCell align="center">{user.Rank}</TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }


