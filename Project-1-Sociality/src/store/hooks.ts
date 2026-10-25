import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/store";

/**
 * Versi useDispatch dan useSelector yang sudah mengenal tipe store kita,
 * supaya komponen tidak perlu menulis anotasi tipe berulang kali.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
