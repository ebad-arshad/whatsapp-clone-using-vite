import userStore from "./user";
import conditionStore from "./conditions";
import chatStore from "./chat";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userStore,
    conditionStore,
    chatStore,
  },
});

export default store;