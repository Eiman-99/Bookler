import { createSlice } from "@reduxjs/toolkit";

const savedUsers = localStorage.getItem("users");
const savedUser = localStorage.getItem("user");

const initialState = {
  users: savedUsers ? JSON.parse(savedUsers) : [],
  currentUser: savedUser ? JSON.parse(savedUser) : null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const exists = state.users.find(
        (user) => user.email === action.payload.email
      );

      if (!exists) {
        const updatedUsers = [...state.users, action.payload];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("user", JSON.stringify(action.payload));

        return {
          ...state,
          users: updatedUsers,
          currentUser: action.payload,
          error: null,
        };
      } else {
        return {
          ...state,
          error: "User already exists",
        };
      }
    },

    login: (state, action) => {
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = storedUsers.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));

        return {
          ...state,
          currentUser: user,
          error: null,
        };
      } else {
        return {
          ...state,
          currentUser: null,
          error: "Invalid Credentials",
        };
      }
    },
    logout: (state) => {
      localStorage.removeItem("user");

      return {
        ...state,
        currentUser: null,
      };
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
