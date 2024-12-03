import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/clientApp";

function useAuth() {
  const [user, setLocalUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        console.log("There is a user.");
        setLocalUser(user);
      } else {
        console.log("There is no user.");
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuth;
