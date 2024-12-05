import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth } from "../firebase/clientApp";

function useAuth() {
  const [user, setLocalUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setLocalUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}

export default useAuth;
