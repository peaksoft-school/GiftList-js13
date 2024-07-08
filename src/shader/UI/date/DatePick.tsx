import { Box, Modal, styled } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "none ",

	boxShadow: 24,
	p: 4,
};

const DatePick = () => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<CalendarStyled onClick={handleOpen} />
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<CloseModal>
						<CloseIcon
							style={{
								backgroundColor: "red",
								borderRadius: "50%",
								color: "white",
							}}
							onClick={handleClose}
						/>
					</CloseModal>
					<DateCalendar />
				</Box>
			</Modal>
		</div>
	);
};

export default DatePick;

const CloseModal = styled(Box)`
	text-align: end;
	margin-top: -15px;
`;

const CalendarStyled = styled(CalendarMonthIcon)`
	width: 50px;
	height: 50px;
	cursor: pointer;
	&:active {
		background-color: gray;
		border-radius: 15px;
	}
`;
