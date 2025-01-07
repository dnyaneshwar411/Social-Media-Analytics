"use client";
import { initData } from "@/utils/utilities";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  totalLikes: 0,
  totalComments: 0,
  totalShares: 0,
  totalPosts: 0
};

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
}

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    ; (function () {
      const payload = initData();
      dispatch({ type: "INIT", payload })
    })()
  }, [])

  return <DashboardContext.Provider value={state}>
    {children}
  </DashboardContext.Provider>
}

export default function useDashboardContent() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("No Data Available!");
  }

  return context;
}