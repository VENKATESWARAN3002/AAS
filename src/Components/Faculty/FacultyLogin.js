import React, { useState } from "react";
import { db } from '../../firebase';
import { Link } from "react-router-dom";
import {getDocs,collection,where,query} from 'firebase/firestore'
import { useNavigate } from "react-router-dom";
import {IonIcon} from '@ionic/react';
import { mailOutline,lockClosedOutline } from 'ionicons/icons'
import '../../css/Login.css'
import logo from '../ptu-logo.png'

const FacultyLogin = () =>{
    const [facEmail,setFacEmail] = useState('')
    const [facPassword,setFacPassword] = useState('')
    const navigate = useNavigate()

    const login = async (e) =>
    {
        e.preventDefault();
        const dbref = collection(db, 'tbl_faculty')
        try{
            const facultyQuery = query(dbref, where('fac_email', '==',facEmail), where('fac_password','==',facPassword));
            const facultySnapshot = await getDocs(facultyQuery);
            const facultyArray = facultySnapshot.docs.map((doc) => doc.data())
            if(facultyArray.length > 0 )
            {
                alert('Login Successfully')
                navigate(`/faculty/dash`);
            }
            else{
                alert("Check your Email or Password")
            }
        }
        catch(error){
         alert(error)
        }
    }   
    return(
        <>
        <section>
            <div className="form-box">
                <div className="form-value">
                    <div className="main-icon">
                        <img src={logo}/>
                    </div>
                     <form>
                        <h2>Login</h2>
                        <div className="inputbox"> <IonIcon icon={mailOutline}/>
                            <input type="email" onChange={(e) => setFacEmail(e.target.value)}></input><label>Email</label> 
                    </div>
                    <div className="inputbox"> <IonIcon icon={lockClosedOutline}/>
                        <input type="password" onChange={(e) => setFacPassword(e.target.value)}></input><label>Password</label> 
                    </div>
                    <button className ="btn"  onClick={login}>Login</button>
                    <div className="register">
                        <p>
                        Aldready Have an Account <Link to = '/faculty/register'>Register</Link>
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default FacultyLogin