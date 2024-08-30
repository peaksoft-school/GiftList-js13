import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";

interface LabelTypes {
	label: string;
}
function DatePick({ label }: LabelTypes) {
	const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());

	const handleDateChange = (newDate: Dayjs | null) => {
		setSelectedDate(newDate);
		console.log("Selected Date: ", newDate ? newDate.format("YYYY-MM-DD") : "");
	};

	return (
		<DemoContainer components={["DatePicker"]}>
			<DatePicker
				label={label}
				value={selectedDate}
				onChange={handleDateChange}
			/>
		</DemoContainer>
	);
}

export default DatePick;
