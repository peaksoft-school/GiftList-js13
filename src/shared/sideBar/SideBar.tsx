import {
  Button,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { menuItems } from "../../features/lib/constants";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = ({ data = menuItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <StyledDrawer>
      <Title variant="h6">GIFT LIST</Title>
      <List style={{ padding: "10px" }}>
        {data.map((item, id) => {
          const isActive = location.pathname
            .split("/")
            .some((path) => path === item.navigate.split("/").pop());

          return (
            <StyledListItem
              key={id}
              onClick={() => navigate(item.navigate)}
              active={isActive}
            >
              <ListItemIcon>
                <img src={item.icon} alt={item.text} width={24} height={24} />
              </ListItemIcon>
              <StyledListItemText primary={item.text} />
            </StyledListItem>
          );
        })}
      </List>
    </StyledDrawer>
  );
};

export default SideBar;

const StyledDrawer = styled("div")({
  width: "290px",
  height: "100vh",
  boxSizing: "border-box",
  background: "linear-gradient(0deg,#212569 0%,#6f35a4 100%)",
  color: "#fff",
});

const StyledListItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ active }) => ({
  width: "100%",
  textTransform: "none",
  cursor: "pointer",
  borderRadius: "10px",
  color: "#fff",
  textAlign: "left",
  backgroundColor: active ? "rgba(232, 220, 220, 0.15)" : "",
  "&:hover": {
    backgroundColor: "rgba(232, 220, 220, 0.1)",
    transition: "background-color 0.3s ease-in-out",
  },
}));

const StyledListItemText = styled(ListItemText)({
  fontSize: "calc(1em + 4vw)",
});

const Title = styled(Typography)({
  cursor: "pointer",
  textAlign: "center",
  padding: "1rem 0",
  color: "#fff",
});
