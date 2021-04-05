import { useSelector } from "react-redux";
import { getExpenses } from "./selectors";

export const useExpenses = () => useSelector(getExpenses);
