import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './SignIn.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        display: 'flex',
        marginLeft: '30%',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
  },
}}));

export default function SignUp (props) { 

  const classes = useStyles();

  const { Age, Country, Gender, Phone } = props.values;

    return (
        <> 
          <TextField 
              id="Age" 
              label="Age" 
              name="Age"
              defaultValue={Age}
              onChange={props.handleChange('Age')}
              fullWidth
          />
          <TextField 
              id="Country" 
              label="Country" 
              name="Country"
              defaultValue={Country}
              onChange={props.handleChange('Country')}
              fullWidth
          />
          <TextField 
              id="Phone" 
              label="Phone" 
              name="Phone"
              defaultValue={Phone}
              onChange={props.handleChange('Phone')}
              fullWidth
          />
      
          <FormControl className={classes.formControl}>
            <InputLabel id="Gender">Gender</InputLabel>
            <Select 
              labelId="Gender" 
              id="Gender"
              defaultValue={Gender}
              onChange={props.handleChange('Gender')}
              fullWidth
              >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </>
    );
  }
  
