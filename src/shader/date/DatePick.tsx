import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";

function DatePick() {
	const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

	const handleDateChange = (newDate: Dayjs | null) => {
		if (newDate) {
			setSelectedDate(newDate);
			console.log("Selected Date: ", newDate.format("YYYY-MM-DD"));
			console.log("Year: ", newDate.year());
			console.log("Month: ", newDate.month() + 1);
			console.log("Day: ", newDate.date());
		}
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<DatePicker
					label="Укажите Дату праздника"
					value={selectedDate}
					onChange={handleDateChange}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
}

export default DatePick;
