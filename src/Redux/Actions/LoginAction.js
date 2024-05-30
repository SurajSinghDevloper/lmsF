import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie, setUserCookie, getCookie } from "../../utils/Cookies";

export const loginAction = createAsyncThunk(
  "Action/loginAction",
  async (payload) => {
    const response = await fetch("http://localhost:8080/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Assuming response data contains accessToken and user fields
    if (response.status === 200) {
      const { accessToken, user } = data;
      localStorage.setItem("user", JSON.stringify(user));

      setCookie("token", "Bearer " + accessToken, 1);
      setUserCookie("user", user, 1);
    }

    return data;
  }
);

export const isUserLoggedIn = createAsyncThunk(
  "Action/isUserLoggedIn",
  async (_, { dispatch }) => {
    const token = getCookie("token");
    console.log("TOKEN FROM isUserLoggedIn --------->>>>>", token);

    const userJSON = localStorage.getItem("user");

    if (token && userJSON) {
      try {
        const user = JSON.parse(userJSON);
        return { token, user };
      } catch (error) {
        console.error("Error parsing user JSON:", error);
        throw new Error("Error parsing user data.");
      }
    } else {
      throw new Error("User is not logged in.");
    }
  }
);
