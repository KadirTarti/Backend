import { useDispatch, useSelector } from "react-redux";

// No need for withTypes in JavaScript, just use useDispatch and useSelector directly
export const useAppDispatch = () => useDispatch();

export const useAppSelector = (selector) => useSelector(selector);
