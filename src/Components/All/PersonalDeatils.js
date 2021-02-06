import React, {useEffect, useState} from 'react';
import './PrsonalDeatils.css';
// import profileImg from './Media/profile.png'
import { Button } from '@material-ui/core';
import PopUp from '../All/PopUp';
import TextField from '@material-ui/core/TextField';


  
export default function RenterPage(props) {


    const [openEdit,setOpenEdit] = useState(false);
    const [jobTitle,setJob] = useState("");
    const [budget,setBudget] = useState("");
    const [favoriteCountry,setFavoriteCountry] = useState("");
    const [phone,setPhone] = useState("");
    const [country,setCountry] = useState("");
    const [email,setEmail] = useState("");

    const [renterDeatils,setRenterDeatils] = useState("");
    const [owner,setOwner] = useState("");

    const editRenter = () => {
        const body = { JobTitle: jobTitle,Budget:budget,FavoriteCountry: favoriteCountry};
        console.log(body);
        // fetch(`https://instarent-1st.herokuapp.com/api/users/${user.id}`, {
        fetch(`http://localhost:3000/api/renterDeatils/${props.idRenter}` ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => {
              setOpenEdit(false);
              setRenterDeatils(result)
              setJob("")
              setBudget("")
              setFavoriteCountry("")
          });
      }

      const editOwner = () => {
        const body = { Country: country,Email:email,Phone:phone};
        console.log(body);
        // fetch(`https://instarent-1st.herokuapp.com/api/users/${user.id}`, {
        fetch(`http://localhost:3000/api/users/${props.idOwner}` ,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
          .then(response => response.json())
          .then(result => {
              setOpenEdit(false);
              setOwner(result)
              setCountry("")
              setEmail("")
              setPhone("")
          });
      }

      const isRenter = () => {
          return (
              <>
                <div><Button style={{marginBottom:'5%'}} variant="contained" color="primary" onClick={() => setOpenEdit(true)}>Edit</Button></div>   
                <PopUp onSubmit={editRenter} title={"Edit User"} open={openEdit} closePopup={() => setOpenEdit(false)} sendBtn={true}>
                    <TextField label="JobTitle" value={jobTitle} onChange={e => setJob(e.target.value)} fullWidth required/>
                    <TextField label="Budget" value={budget} onChange={e => setBudget(e.target.value)} fullWidth required/>
                    <TextField label="Favorite country" value={favoriteCountry} onChange={e => setFavoriteCountry(e.target.value)} fullWidth required/>
                </PopUp>
            </>
          )
      }

      const isOwner = () => {
        return (
            <>
              <div><Button style={{marginBottom:'5%'}} variant="contained" color="primary" onClick={() => setOpenEdit(true)}>EDIT</Button></div>   
              <PopUp onSubmit={editOwner} title={"Edit User"} open={openEdit} closePopup={() => setOpenEdit(false)} sendBtn={true}>
                  <TextField label="Country" value={country} onChange={e => setCountry(e.target.value)} fullWidth required/>
                  <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth required/>
                  <TextField label="Phone" value={phone} onChange={e => setPhone(e.target.value)} fullWidth required/>
              </PopUp>
          </>
        )
    }

    return (
        <div className={"personalDeatils"}>
            <img src={props.ImageUrl} alt="profile" />
            <h1>{props.FirstName} {props.LastName}</h1>
            <h3>{props.JobTitle}</h3>
            <div className={"line"}></div>
            <p>Gender</p>
            <span>{props.Gender}</span>
            <p>Age</p>
            <span>{props.Age}</span>
            <p>Country</p>
            <span>{props.Country}</span>
            {props.renter ? isRenter() : isOwner()} 
            {/* <div><Button style={{marginBottom:'5%'}} variant="contained" color="primary" onClick={() => setOpenEdit(true)}>Edit</Button></div>   
            <PopUp onSubmit={editUser} title={"Edit User"} open={openEdit} closePopup={() => setOpenEdit(false)} sendBtn={true}>
                <TextField label="JobTitle" value={jobTitle} onChange={e => setJob(e.target.value)} fullWidth required/>
                <TextField label="Budget" value={budget} onChange={e => setBudget(e.target.value)} fullWidth required/>
            </PopUp> */}
        </div>

	);
}
