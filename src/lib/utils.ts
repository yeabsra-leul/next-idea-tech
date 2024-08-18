import dayjs from "dayjs";

// Format the date to "Month YYYY"
export function formatdDate(date: Date | string | number) {
return dayjs(date).format("MMMM YYYY")
}