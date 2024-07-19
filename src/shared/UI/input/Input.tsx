import {
	InputAdornment,
	TextField,
	TextFieldProps,
	styled,
} from "@mui/material";
import { ChangeEvent, Ref, forwardRef } from "react";
import V  from "../../../assets/icon/voscklicat.svg";

type InputProps = Omit<TextFieldProps, "variant"> & {
	value?: string;
	label?: string;
	variant?: "outlined" | "standard" | "filled";
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	error?: boolean;
	helperText?: string;
};

export const Input = forwardRef(
	(props: InputProps, ref?: Ref<HTMLInputElement>) => {
		const {
			value,
			id,
			label,
			variant = "outlined",
			onChange,
			error = false,
			helperText,
			...rest
		} = props;

		return (
			<div
				style={{
					fontFamily: "sans-serif",
				}}>
				<label
					htmlFor={id}
					style={{
						color: error ? "red" : "#818386",
						fontSize: "22px",
					}}>
					{label}
				</label>
				<StyledInput
					inputRef={ref}
					id={id}
					fullWidth
					variant={variant}
					value={value}
					onChange={onChange}
					error={error}
					{...rest}
					InputProps={{
						endAdornment: error && (
							<InputAdornment position="end">
								<V />
							</InputAdornment>
						),
					}}
				/>
				{error && (
					<div style={{ color: "red", textAlign: "right" }}>{helperText}</div>
				)}
			</div>
		);
	}
);

const StyledInput = styled(TextField)(() => ({
	"& .MuiOutlinedInput-root": {
		fontSize: "27px",
		borderRadius: "12px",
		padding: "0px 15px",

		"& fieldset": {
			margin: "6px 0",
			borderWidth: "2px",
		},
		"&:hover fieldset": {
			borderColor: "#8639B5",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#8639B5",
		},
	},
	"& .MuiOutlinedInput-root.Mui-error": {
		"& fieldset": {
			borderColor: "red",
		},
		"& input": {
			color: "red",
		},
	},
}));
