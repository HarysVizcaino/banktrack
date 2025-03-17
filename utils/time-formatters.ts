import { format } from "date-fns";

export const formatFriendlyDate = (isoDate: string) => {
    return format(new Date(isoDate), "MMMM dd, yyyy hh:mm a"); // Example: March 11, 2024 12:15 PM
  };