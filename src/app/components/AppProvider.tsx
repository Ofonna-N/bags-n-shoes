"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/appstore/store";
interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
