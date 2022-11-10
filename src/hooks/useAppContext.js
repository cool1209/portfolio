import { useContext } from "react";
import { NavContext } from "../context/AppContext";

export const useAppContext = () => useContext(NavContext);
