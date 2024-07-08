import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

function DatePick() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				position: "relative",
			}}>
			<DemoItem>
				<DateInput label="Укажите дату праздника" />
			</DemoItem>
		</Box>
	);
}
export default DatePick;

const DateInput = styled(DatePicker)`
	width: 400px;
`;
