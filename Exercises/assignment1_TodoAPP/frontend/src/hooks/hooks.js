import { useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch; // No need for.withTypes in JavaScript
export const useAppSelector = useSelector; // No need for.withTypes in JavaScript
