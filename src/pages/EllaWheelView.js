import React ,{useEffect,useState,useRef}from 'react';
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





function EllaWheelView() {
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
    const unsub = onSnapshot(collection(db, "EllaWheel",), (snapshot)=> {
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

const productsCollectionRef = collection(db, "EllaWheel");

const handleDelete= async (id)=>{
  if (window.confirm("Are you sure you want to delete")){
    try{
      const productDoc = doc(db, "EllaWheel", id);
      await deleteDoc(productDoc);
      // await deleteDoc(doc(db,"EllaWheel",id));
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
          <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">No</StyledTableCell>
            <StyledTableCell align="left">Contact</StyledTableCell>
            {/* <StyledTableCell align="left">Action</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <StyledTableRow key={row.id}>

              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.vehicle}</StyledTableCell>
              <StyledTableCell align="left">{row.vehicleNo}</StyledTableCell>
              <StyledTableCell align="left">{row.contact}</StyledTableCell>
              {/* <StyledTableCell><Button   onClick={() => {
              handleDelete(row.id);
            }} >Delete</Button> </StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default EllaWheelView