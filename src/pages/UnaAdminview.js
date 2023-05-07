import React ,{useEffect,useState, useRef}from 'react';
import { db } from './Firebase';
import { useNavigate } from 'react-router';
import { collection, deleteDoc, onSnapshot ,doc } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";
import { Grid } from 'react-loader-spinner';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import "./view.css";
import { async } from '@firebase/util';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





function UnaAdminview() {
//  const[users,setUsers]= useState([]);
 const [loading,setLoading]=useState(false);
 const navigate = useNavigate();
 const[user,setUser]=useState([]);

 const StyledTableCell =styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

 const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

 useEffect( ()=> {
    setLoading(true);
    const unsub = onSnapshot(collection(db, "Unawatuna",), (snapshot)=> {
            let list =[];
            snapshot.docs.forEach((doc)=> {
            list.push({id: doc.id, ...doc.data()})
            });
            setUser(list);
            setLoading(false);
    },
    (error)=>{
        console.error(error);
    }
    );

    
    
return ()=>{
    unsub();
};
},[]);

const productNameRef = useRef();

const productsCollectionRef = collection(db, "Unawatuna");

const handleDelete= async (id)=>{
  if (window.confirm("Are you sure you want to delete")){
    try{
      const a = doc(db, "Unawatuna", id);
      await deleteDoc(a);
      // setUser(user.filter((user)=>row.id !== id))
    }
catch(err){
  console.error(err);
}
  }
}
  return (
  //  <div className='view'>
  //   <div className='hotel-deatils'>Hotel Details</div>

  //  {users && users.map((item)=>(
     
  // <table class="styled-table">
      
  //   <thead>
  //   <tr>
  //     <td>ID</td>
  //     <th>name</th>
  //     <th>contact</th>
  //     <th>owner</th>
  //     <th>avaible rooms</th>
  //     <th>email</th>
  //     <th></th>
  //     </tr>
  //     </thead>
  //     <tbody>
  //   <tr class="active-row">
  //   <th>{item.id}</th>
  //     <th>{item.name}</th>
  //     <th>{item.contact}</th>
  //     <th>{item.owner}</th>
  //     <th>{item.rooms}</th>
  //     <th>{item.email}</th>
  //     <th><button onClick={()=> handleDelete} >Delete</button>
      
  //     </th>
     
  //     </tr>

  //     </tbody>
    
    
  // </table>
  //      ))}
  //  </div>
  <div>
    
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
    <StyledTableCell align="left">Hotel Name</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Owner</StyledTableCell>
            <StyledTableCell align="left">Contact</StyledTableCell>
            <StyledTableCell align="left">Rooms</StyledTableCell>
            <StyledTableCell align="left">Days</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Rate</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <StyledTableRow key={row.id}>

                          <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.owner}</StyledTableCell>
              <StyledTableCell align="left">{row.contact}</StyledTableCell>
              <StyledTableCell align="left">{row.rooms}</StyledTableCell>
              <StyledTableCell align="left">{row.days}</StyledTableCell>
              <StyledTableCell align="left">{row.price}</StyledTableCell>
              <StyledTableCell align="left">{row.rating}</StyledTableCell>
              <StyledTableCell>  <Button   onClick={() => {
              handleDelete(row.id);
            }} >Delete</Button> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default UnaAdminview
