import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accessTokenSlice from "./slide/accessTokenSlice";
import currentProjectIdSlice from "./slide/currentProjectIdSlice";
import currentProjectInfoSlice from "./slide/currentProjectInfoSlice";
import listMissionSlice from "./slide/listMissionSlice";
import listOtherProjectSlice from "./slide/listOtherProjectSlice";
import myListProjectSlice from "./slide/myListProjectSlice";
import userSlice from "./slide/userSlice";

const rootReducer = combineReducers({
  accessToken: accessTokenSlice,
  myListProject: myListProjectSlice,
  listOtherProject: listOtherProjectSlice,
  currentProjectId: currentProjectIdSlice,
  listMission: listMissionSlice,
  currentProjectInfo: currentProjectInfoSlice,
  user: userSlice,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["accessToken"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export default createWrapper(() => store);
