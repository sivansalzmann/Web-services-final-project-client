import React, {useEffect, useState} from 'react';
import './UserDeatils.css';
export default function UserDeatils(props) {
    const [renter,setRenter] = useState("")
    const [renterDeatils,setRenterDeatils] = useState("")


    useEffect(() => {
        console.log(props.item)
        fetch(`http://localhost:3000/api/users/${props.item}`)
          .then(response => response.json())
          .then(result =>  {
            setRenter(result)
            console.log(result)
          })
          
        }, [])

        useEffect(() => {
            console.log(props.item)
            fetch(`http://localhost:3000/api/renterDeatils/${props.item}`)
              .then(response => response.json())
              .then(result =>  {
                setRenterDeatils(result)
                console.log(result)
              })
              
            }, [])

  return (
    <div>
        <div className={"rowImg"}>
            <div className={"coulmn"}>            
                <h3>{renter.FirstName},{renter.LastName}</h3>
                <span>{renterDeatils.JobTitle}</span>
                <div>
                    <h4>Budget:</h4>
                    <span>{renterDeatils.Budget}</span>
                </div>
            </div> 
            <img src={renter.ImageUrl} alt="profile"/>
        </div>
        <div className={"renterContainer"}>
            <div className={"firstDeatils"}>
                <div>
                    <h4>Gender: </h4>
                    <span>{renter.Gender}</span>
                </div>
                <div>
                    <h4>Age:</h4>
                    <span>{renter.Age}</span>
                </div>
                <div>
                    <h4>Country: </h4>
                    <span>{renter.Country}</span>
                </div>
            </div>
            <div className={"row"}>
                <h4>Phone: </h4>
                <span>{renter.Phone}</span>
            </div>
            <div className={"row"}>
                <h4>Email: </h4>
                <span>{renter.Email}</span>
            </div>
        </div>
    </div>
  );
}