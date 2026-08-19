"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Experience } from "@/data/mockExperiences";

export interface BookingDetails {
  experience: Experience | null;
  date: string;
  time: string;
  guests: number;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
}

interface BookingContextType {
  bookingDetails: BookingDetails;
  setBookingDetails: React.Dispatch<React.SetStateAction<BookingDetails>>;
  resetBooking: () => void;
}

const defaultDetails: BookingDetails = {
  experience: null,
  date: "",
  time: "",
  guests: 1,
  customer: { name: "", email: "", phone: "" },
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(defaultDetails);

  const resetBooking = () => {
    setBookingDetails(defaultDetails);
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, setBookingDetails, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
