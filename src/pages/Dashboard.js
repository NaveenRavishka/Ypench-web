// import React from 'react'
// import {
//     Card,TableContainer, Grid, Container, Typography, TableHead, TableCell, TableBody, Table, TableRow,
//     Paper, Button, Checkbox, TextField, Autocomplete, IconButton, Select, CssBaseline, Divider, MenuItem, OutlinedInput, Box, InputLabel,
//     FormControl
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// import 'react-circular-progressbar/dist/styles.css';
// // import Dashboard from '../../src/components/Dashboard';
// import { Bar } from 'react-chartjs-2';
// import { Pie } from 'react-chartjs-2';
// import HomeSharpIcon from '@mui/icons-material/HomeSharp';
// import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
// import {
//     Chart as ChartJS,
//     Title,
//     ArcElement,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Tooltip,
//     Legend
// } from 'chart.js';
// import { color, sizeHeight } from '@mui/system';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     ArcElement,
//     Tooltip,
//     Legend);

// const Dashboard =() => {
//     const classes = useStyles();

// const users =[
//     {name:"A",item:100,leftover:500},
//     {name:"B",item:200,leftover:600},
//     {name:"C",item:300,leftover:700},
//     {name:"D",item:400,leftover:800},
//     {name:"E",item:500,leftover:900},
// ];
// const data = {
//     datasets:[{
        
//         data:[10,20,30,],
//         backgroundColor:[
//             'red',
//             'blue',
//             'yellow',
//         ]
//     }],

// label: [
//     'red',
//     'yellow',
//     'blue',
// ]    
// }
 
//   return (
//     <div className={classes.content}>
//         {/* <Dashboard/> */}
//         <Container className={classes.container}>
//         <CssBaseline />
        
//         <Typography variant='h6' style={{  fontWeight: 'bold', }} className={classes.typography}>
//         <HomeSharpIcon sx={{ color: 'primary',fontSize:'large' }}/>  Dashboard</Typography>
                    
//         </Container>
//         <div style={{  paddingBottom:'1px' }}>
        
//         <Grid container spacing={1}>
        
//         <Card style={{ marginLeft:'3%',background: `linear-gradient(to left bottom, #5ce7fb, #74ecfb, #89f0fb, #9cf5fc, #adf9fd)`, }}className={classes.card}>
//         <Typography variant='h5' style={{ marginBottom: '1px', fontWeight: 'bold', marginTop: '1%' ,marginLeft:'3%'}} className={classes.typographybox}>
//                    Total Summary
//                    <Chip style={{marginLeft:'35%'}}  label="Total" color="success" />
//                    </Typography>
//         <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '6%' }}>
//                    Total Sales -1000</Typography>
//         <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '1px' }} >
//                     Total Payments-500000</Typography>
                
//                    <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '1px' }} >
//                     Total OutSanding-400000</Typography>
                  
//                     {/* <div style={{marginLeft:'50%', width: 80, height: 80,marginBottom: '10%', }}>
//                         <CircularProgressbar value={percentage}  text={`${percentage}%`}/>
                        
// </div> */}

//         </Card>
        
//         <Card style={{ marginLeft:'3%',background: `linear-gradient(to right top, #acf87b, #bcfa98, #ccfcb4, #ddfdcf, #eefde8)`  }}className={classes.card}>
//         <Typography variant='h5' style={{ marginBottom: '1px', fontWeight: 'bold', marginTop: '1%' ,marginLeft:'3%'}} className={classes.typographybox}>
//                    Day Summary
//                    <Chip style={{marginLeft:'35%'}}  label="Total" color="success" /></Typography>
//         <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '6%' }} >
//                    Total Sales - 20000</Typography>
                  
//                     <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '1px' }} >
//                     Total Payments - 20000</Typography>
                    
//                    <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '1px' }} >
//                     Total OutSanding -20000</Typography>
                
//                    {/* <div>
//                         <CircularProgressbar value={percentage}  text={`${percentage}%`}
//                          styles={buildStyles({  transition: 'stroke-dashoffset 0.5s ease 0s', pathTransitionDuration: 0.5})} />
// </div> */}
                    
//         </Card>

//         <Card style={{ marginLeft:'3%',background:` linear-gradient(to left bottom, #fda2ab, #feafb9, #ffbdc6, #ffcad2, #ffd7de)` }}className={classes.card}>
//         <Typography variant='h5' style={{ marginBottom: '1px', fontWeight: 'bold', marginTop: '1%' ,marginLeft:'3%'}} className={classes.typographybox}>
//                    Day Summary
//                    <Chip style={{marginLeft:'35%'}}  label="Total" color="success" /></Typography>
//         <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '6%' }} >
//                    Total Sales - 20000</Typography>
                  
//                     <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '1px' }} >
//                     Total Payments - 20000</Typography>
                    
//                    <Typography variant='h6' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '1px' }} >
//                     Total OutSanding -20000</Typography>
                
//                    {/* <div>
//                         <CircularProgressbar value={percentage}  text={`${percentage}%`}
//                          styles={buildStyles({  transition: 'stroke-dashoffset 0.5s ease 0s', pathTransitionDuration: 0.5})} />
// </div> */}
                    
//         </Card>
//         </Grid>
//         </div>
//         <Grid container spacing={1}>
        
//        <Card style={{ marginLeft:'2%' ,marginTop:'3%', width:'50%' }}>
//         <Typography variant='h5' style={{ marginLeft: '1%', fontWeight: 'bold', marginTop: '1%',paddingBottom:'8%' }} >
//                     Sales Report</Typography>
// {/* <div className='bar' style={{padding:"5rem 10rem", }}> */}
//     <Bar data={{
//         labels:users.map(user => user.name),
//         datasets:[
//             {label:"No of Item",
//             data: users.map(users => users.item),
//             backgroundColor:"rgba(225,99,132)",
//         },
//         {label:"No of Leftover",
//         data: users.map(users => users.leftover),
//         backgroundColor:"rgba(54,162,235)",
//     },
//         ]
//     }}/>
// {/* </div> */}
// </Card>
// <Card style={{ marginLeft:'5%' ,marginTop:'3%', width:'40%' }}> 
//         <Typography variant='h5' style={{ marginLeft: '10%', fontWeight: 'bold', marginTop: '6%', paddingBottom:'6%' }} >
//                     Sales Report</Typography>
// {/* <div className='bar' style={{padding:"5rem 10rem", }}> */}
//    <div className='pie' style={{ marginLeft:'15%',width:'80%',height:'80%',paddingBottom:'5%'}}>
//     No of item
//    <Pie data={data}/></div>
// {/* </div> */}
// </Card>
// </Grid>
        

//     </div>
//   )
// }

// const useStyles = makeStyles((theme) =>({
//     content: {
//         flexGrow:1,
//         height: '100vh',
//         overflow: 'auto',
//         backgroundColor: '#e9f0f6'
//     },
//     container: {
//         marginTop: '6%',
//         [theme.breakpoints.only('xs')]: {
//             marginTop: '15%'
//         },
//         [theme.breakpoints.only('sm')]: {
//             marginTop: '10%'
//         },
//         [theme.breakpoints.only('md')]: {
//             marginTop: '10%'
//         },
//     },
//     typography: {
//         margin: '0%',
//         fontWeight: 'bold',
//         [theme.breakpoints.only('xs')]: {
//             marginLeft: '4px',
//         },
//     },
  

//     card:
//     {   
//         marginTop:'2%',
//         width:'30%',
//         height: '30%',
//         paddingBottom:'1%',
        
        
       
        
//     },
   

// }));

// export default Dashboard