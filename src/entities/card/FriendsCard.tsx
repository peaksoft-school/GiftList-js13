import React from "react";
import { FriendsCardProps } from "../lib/helpers/CartType";
import { styled } from "@mui/material/styles";

const FriendsCard: React.FC<FriendsCardProps> = ({ arrow }) => {
  return (
    <FriendsContainer>
      {arrow?.map((item) => (
        <FriendCard key={item.id}>
          <FriendImageContainer>
            <FriendImage src={item.imageUrl} alt={item.name} />
            <FriendName>{item.name}</FriendName>
          </FriendImageContainer>
          <FriendInfo>
            <InfoItem>
              <p>{item.counter}</p>
              <p>Желаний</p>
            </InfoItem>
            <InfoItem>
              <p>{item.counterTwo}</p>
              <p>Праздников</p>
            </InfoItem>
          </FriendInfo>
        </FriendCard>
      ))}
    </FriendsContainer>
  );
};

const FriendsContainer = styled("div")({
  display: "flex",
  width: "1086px",
  height: "1024px",
  gap: "16px",
  justifyContent: "space-around",
  padding: "16px",
});

const FriendCard = styled("div")({
  background: "linear-gradient(to bottom, #EADDFD 50%, white 50%)",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  width: "257px",
  height: "257px",
  textAlign: "center",
  padding: "16px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});

const FriendImageContainer = styled("div")({
  borderRadius: "50%",
  marginBottom: "16px",
  position: "relative",
});

const FriendImage = styled("img")({
  width: "150px",
  height: "150px",
  borderRadius: "50%",
});

const FriendName = styled("p")({
  fontWeight: "400",
  fontSize: "16px",
  marginTop: "8px",
  lineHeight: "19.36px",
  color: "rgba(2, 2, 2, 1)",
});

const FriendInfo = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  color: "#757575",
  marginBottom: "8px",
});

const InfoItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "12px",
  lineHeight: "14.52px",
  fontWeight: "400",
  color: "rgba(96, 96, 96, 1)",
});

export default FriendsCard;
