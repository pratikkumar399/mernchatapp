import { useState } from "react"; // Don't forget to import React when using JSX syntax
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password); // Removed "auth." from the function call

            const storageRef = ref(storage, `profile/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                null,
                (error) => {
                    setError(true);
                },
                () => {
                    getDownloadURL(storageRef).then(async (url) => {
                        await updateProfile(res.user, { // Changed res.user.updateProfile to updateProfile(res.user, ...)
                            displayName: displayName,
                            photoURL: url,
                        });

                        await setDoc(doc(db, "users", res.user.uid), { // Corrected the parenthesis position
                            uid: res.user.uid,
                            displayName: displayName,
                            email: email,
                            photoURL: url,
                        });

                        await setDoc(doc(db, "userChats", res.user.uid), {
                        });
                        navigate("/");
                    });
                }
            );
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Nexus Chat</span>
                <span className="title">Register</span> {/* Corrected "titel" to "title" */}
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter name" />
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {error && <span className="error">Something went wrong!</span>}
                </form>
                <p>Already have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;
