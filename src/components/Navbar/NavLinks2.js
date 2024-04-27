import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavLinks = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("Signed out successfully!");
                navigate("/");
            })
            .catch((error) => {
                console.error("Error signing out:", error);
            });
    };

    return (
        <>
            <HashLink className="px-[5px] font-normal text-black-500 hover:text-green-600" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-[5px] font-normal text-black-500 hover:text-green-600" smooth to="/#services">
                Services
            </HashLink>
            <HashLink id="loginButton" className="text-white bg-green-600 hover:bg-green-700 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" smooth to="/login" aria-label="Log In">
                Log In
            </HashLink>
            <button onClick={handleSignOut} className="text-white bg-red-600 hover:bg-red-700 inline-flex items-center justify-center w-auto px-5 py-2 shadow-xl rounded-xl" aria-label="Log Out">
                Log Out
            </button>
        </>
    );
}

export default NavLinks;

