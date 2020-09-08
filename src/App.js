/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { lightBlue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar'
import BarChart from './BarChart'
import LineChart from './LineChart'
const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexWrap:'wrap',
    
    // backgroundColor:'grey',
    height:800, 
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      
    },
  },
  paper:{
    backgroundColor:'lightGrey',
    margin: '0 auto',
    textAlign:'center',
    height:500,
    width:600,
    paddingTop:5,
    marginTop:120

  },text: {
    textAlign:'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
      
      
    },
  },
  butt: {
    
    '& > *': {
      margin: theme.spacing(1),
      width:'90%',
      
    },
  },
}));

function App() {
  const classes = useStyles();
  let [userName,setUserName] = useState('');
  let [password,setPassword] = useState('');

  const addUser = () => {
    if(!userName ){
      alert('Enter UserName ')
      setUserName('')
      setPassword('')
      return false;
    }
    else if(!password){
      alert('Enter Password ')
      setUserName('')
      setPassword('')
      return false;
    }
    else{
      console.log('Successfully Log In' , userName,password)
      setUserName('')
      setPassword('')
    }
  }

  // console.log(us)
  return (
    <div >

      {/* <BarChart /> */}
      {/* <LineChart /> */}
       <AppBar />
      
    <div className={classes.root}>
      
      <Paper variant="outlined" className={classes.paper} >
        <h1>Login</h1>
        <hr />
        <br />
        <form className={classes.text} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="User Name" variant="outlined" required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" type='Password' required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        </form>
        <div className={classes.butt}>
        <Button variant="contained" color="primary" onClick={() => addUser()}>
        LOGIN
      </Button>
      </div>
        </Paper>
     
     }
    </div>
</div>
);
}

export default App;
