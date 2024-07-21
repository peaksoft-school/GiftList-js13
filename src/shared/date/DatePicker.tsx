import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers";

interface LabelTypes {
	label: string;
}
function DatePicker({ label }: LabelTypes) {
	const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

	const handleDateChange = (newDate: Dayjs | null) => {
		setSelectedDate(newDate);
		console.log("Selected Date: ", newDate ? newDate.format("YYYY-MM-DD") : "");
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DatePicker"]}>
				<MuiDatePicker
					label={label}
					value={selectedDate}
					onChange={handleDateChange}
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
}

export default DatePicker;
