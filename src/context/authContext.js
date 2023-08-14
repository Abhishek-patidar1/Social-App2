import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Abhishek",
      profilePic:
        "https://images.pexels.com/photos/16943630/pexels-photo-16943630/free-photo-of-man-posing-in-hat-and-shirt.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};