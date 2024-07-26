import { FC } from "react";
import { Box, InputAdornment, styled, TextField } from "@mui/material";

const Header: FC = () => {
	return (
		<>
			<StyleContainer>
				<TextField
					fullWidth
					placeholder="Поиск"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<img src="src/assets/icon/serchIcon.svg" />
							</InputAdornment>
						),
					}}
				/>
				<StyleProfile>
					<ImageStyle src="src/assets/icon/bell.svg" />
					<ProfileAccount>
						<StyleAccount src="src/assets/icon/profiles.svg" />
						<UserName> Naruto Uzumaki</UserName>
						<StyleSelect src="src/assets/icon/Chevrons Icon.svg" />
					</ProfileAccount>
				</StyleProfile>
			</StyleContainer>
		</>
	);
};

export default Header;

const UserName = styled("p")(() => ({
	padding: "5px",
	cursor: "pointer",
}));
const StyleAccount = styled("img")(() => ({
	cursor: "pointer",
}));
const StyleContainer = styled(Box)(() => ({
	display: "flex",
	alignContent: "end",
	width: "100%",
	justifyContent: "space-between",
	margin: "20px",
}));

const StyleSelect = styled("img")(() => ({
	cursor: "pointer",
}));

const StyleProfile = styled(Box)(() => ({
	display: "flex",
	gap: "10px",
	padding: "20px",
	marginTop: "-10px",
	width: "35%",
}));

const ProfileAccount = styled(Box)(() => ({
	display: "inline-flex",
	alignItems: "center",
}));

const ImageStyle = styled("img")(() => ({
	width: "24px",
	margin: "0 15px ",
	cursor: "pointer",
}));
