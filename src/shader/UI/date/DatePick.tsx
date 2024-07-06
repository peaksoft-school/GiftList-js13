import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { FcCalendar } from "react-icons/fc";
import { Box, TextField, Typography } from "@mui/material";

const StyledDialog = styled(Dialog)`
	.MuiDialog-paper {
		width: 400px;
	}
`;

const CalendarModal: React.FC = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Box>
				<Typography>Выберите календарь</Typography>
				<FcCalendar
					onClick={handleOpen}
					style={{ fontSize: "3rem", cursor: "pointer" }}
				/>
			</Box>

			<StyledDialog open={open} onClose={handleClose}>
				<DialogTitle>Выберите дату</DialogTitle>
				<DialogContent>
					<TextField type="date" variant="filled" />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Закрыть</Button>
				</DialogActions>
			</StyledDialog>
		</div>
	);
};

export default CalendarModal;
