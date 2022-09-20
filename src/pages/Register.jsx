import React, { useState } from 'react';
import addSvg from '../img/add-user.svg'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
    const [err, setErr] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);

            const storageRef = ref(storage, displayName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                (error) => {
                    setErr(true);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateProfile(response.user, {
                            displayName,
                            photoURL:  downloadURL
                        });
                        await setDoc(doc(db, 'users', response.user.uid), {
                            uid: response.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        })
                    });
                }
            );



        } catch (err) {
            setErr(true);
        }


    }


    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">DoChat</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='display name' />
                    <input type="email" placeholder='email' />
                    <input type="password" placeholder='password' />
                    <input type="file" style={{ display: 'none ' }} id="filePick" />
                    <label htmlFor="filePick">
                        <img className="imgPick" src={addSvg} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register