import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { HashLink } from 'react-router-hash-link';
import InputControl from "../InputControl/InputControl";
import { auth, provider } from "./firebase";
import styles from "./Signup.module.css";
import NavBar from "../components/Navbar/NavBar";
import heroImg from '../images/right-img3.jpeg';
import { FcGoogle } from 'react-icons/fc';

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [val, setVal] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setVal(data.user.email);
        navigate('/newhome');
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/newhome");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.innerBox}>
            <div className={styles.logoimg}>
              <HashLink smooth to="/#hero"><img src="logo.png" alt="logo" /></HashLink>
            </div>
            <h1 className="md:text-5xl text-3xl font-bold text-black mb-5 mt-5">Sign Up</h1>
            <InputControl
              label="Name"
              placeholder="Enter your name"
              onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            />
            <InputControl
              label="Email"
              placeholder="Enter email address"
              onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            />
            <InputControl
              label="Password"
              placeholder="Enter password"
              type="password"
              onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
            />
            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button onClick={handleSubmission} disabled={submitButtonDisabled}>
                Signup
              </button>
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img alt="hero" style={{ width: '530px', height: '650px', borderRadius: '0 20px 20px 0', float: 'right', transitionDuration: '1000ms', paddingTop: '1px' }} src={heroImg} />
        </div>
      </div>
    </>
  );
}

export default Signup;
