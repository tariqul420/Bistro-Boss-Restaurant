import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("current user ===>", user);

    // Social Login
    const socialLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // forgot password
    const forgotPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    const updateUser = (name, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoading(false);
                setUser(currentUser)
            } else {
                setUser(null)
            }
        })

        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        user,
        loading,
        setUser,
        setLoading,
        logoutUser,
        updateUser,
        socialLogin,
        forgotPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default AuthProvider;