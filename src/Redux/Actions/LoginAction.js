import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie, setUserCookie, getCookie } from "../../utils/Cookies";
import { toast } from "sonner";

// Action to handle login
export const loginAction = createAsyncThunk(
  "Action/loginAction",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/lmsb/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        toast.error("Login Failed !");
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Assuming response data contains accessToken and user fields
      if (response.status === 200) {
        const { accessToken, user } = data;
        localStorage.setItem("user", JSON.stringify(user));
        setCookie("token", "Bearer " + accessToken, 1);
        setUserCookie("user", user, 1);
        toast.success("Login successful!");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Action to check if the user is logged in
export const isUserLoggedIn = createAsyncThunk(
  "Action/isUserLoggedIn",
  async (_, { rejectWithValue }) => {
    const token = getCookie("token");
    const userJSON = localStorage.getItem("user");

    if (token && userJSON) {
      try {
        const user = JSON.parse(userJSON);
        return { token, user };
      } catch (error) {
        console.error("Error parsing user JSON:", error);
        return rejectWithValue({ error: "Error parsing user data." });
      }
    } else {
      return rejectWithValue({ error: "User is not logged in." });
    }
  }
);

export const logoutAction = createAsyncThunk(
  "Action/logoutAction",
  async (_, { rejectWithValue }) => {
    try {
      // Clear user data from local storage
      localStorage.removeItem("user");
      // Clear token cookie
      setCookie("token", "", -1);
      return;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
