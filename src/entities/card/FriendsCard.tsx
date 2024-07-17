import { styled } from "@mui/material/styles";
import { FriendsCardProps } from "../lib/helpers/CartType";
import { FC } from "react";

const FriendsCard: FC<FriendsCardProps> = ({ friend }) => (
  <FriendsContainer>
    <FriendCard key={friend?.id}>
      <FriendImageContainer>
        <FriendImage src={friend?.imageUrl} alt={friend?.name} />
        <FriendName>{friend?.name}</FriendName>
      </FriendImageContainer>
      <FriendInfo>
        <InfoItem>
          <p>{friend?.counter}</p>
          <p>{friend?.wish}</p>
        </InfoItem>
        <InfoItem>
          <p>{friend?.counterTwo}</p>
          <p>{friend?.holiday}</p>
        </InfoItem>
      </FriendInfo>
    </FriendCard>
  </FriendsContainer>
);

const FriendsContainer = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "16px",
  justifyContent: "space-around",
  padding: "16px",
  maxWidth: "1086px",
}));

const FriendCard = styled("div")(() => ({
  background: "linear-gradient(to bottom, #EADDFD 50%, white 50%)",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  width: "257px",
  height: "257px",
  textAlign: "center",
  padding: "16px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
}));

const FriendImageContainer = styled("div")(() => ({
  borderRadius: "50%",
  position: "relative",
}));

const FriendImage = styled("img")(() => ({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
}));

const FriendName = styled("p")(() => ({
  fontWeight: "400",
  fontSize: "16px",
  marginTop: "8px",
  lineHeight: "19.36px",
  color: "rgba(2, 2, 2, 1)",
}));

const FriendInfo = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  color: "#757575",
  marginBottom: "8px",
}));

const InfoItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "12px",
  lineHeight: "14.52px",
  fontWeight: "400",
  color: "rgba(96, 96, 96, 1)",
}));

export default FriendsCard;
