import supabase from "./supabaseClient";
import {BookingDataTypes} from "../types/booking";

export async function setNewBooking(bookingData: BookingDataTypes) {
    let {data, error} = await supabase.rpc("newbooking", {
        ...bookingData,
    });

    if (error) {
        throw new Error("Failed to set new booking");
    }

    return data;
}

