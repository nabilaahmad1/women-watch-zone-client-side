import { getAuth, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // update profile 
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                const newUser = { ...user, displayName: name };
                setUser(newUser)
            })
    }

    // create accout with email and password
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password 
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user state change 
    useEffect(() => {
        const unsubsribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);;
        });
        return () => unsubsribed;
    }, [auth])

    // log out 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setIsLoading(true);
            })
            .finally(() => {
                setIsLoading(false);;
            });
    }

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        setUserName,
        createUserWithEmail,
        signInWithEmail,
        logOut
    }
};

export default useFirebase;