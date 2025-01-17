import { FC } from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Meatballs from "../../shared/UI/Meatballs";
import { Wish } from "../../shared/lib/types/userProfile";



interface GiftSectionProps {
  wish: Wish[];
  handleShowAll: () => void;
  showAll: boolean;
}

const menuData = [
  {
    id: 1,
    icon: "src/assets/icon/edit.svg",
    title: "Edit",
    onClick: () => console.log("Edit clicked"),
  },
  {
    id: 2,
    icon: "src/assets/icon/delete.svg",
    title: "Delete",
    onClick: () => console.log("Delete clicked"),
  },
];

const WishSection: FC<GiftSectionProps> = ({
  wish,
  handleShowAll,
  showAll,
}) => {
  return (
    <Section>
      <ProductsHeader>
        <TypographyName variant="h6">Желаемые подарки</TypographyName>
        <TypographyWatch variant="body1" onClick={handleShowAll}>
          {showAll ? "Скрыть" : "Смотреть все"}
        </TypographyWatch>
      </ProductsHeader>
      <BoxWish>
        {wish.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ProductCard>
              <ProductImage src={item.image} alt={item.giftTitle} />
              <ProductInfo>
                <TypographyTitle variant="body1">
                  {item.giftTitle}
                </TypographyTitle>
                <Typography variant="body2">{item.dateHoliday}</Typography>
              </ProductInfo>
              <ProductDetails>
                <Typography variant="body2">{item.giftTitle}</Typography>
                <BoxMeat>
                  <BoxTypografyWait>
                    <Typography variant="body1">
                      {item.booked ? "Забронировано" : "В ожидании"}
                    </Typography>
                  </BoxTypografyWait>
                  <BoxData>
                    <Meatballs data={menuData} />
                  </BoxData>
                </BoxMeat>
              </ProductDetails>
            </ProductCard>
          </Grid>
        ))}
      </BoxWish>
    </Section>
  );
};

const Section = styled(Box)(() => ({
  marginBottom: "20px",
}));

const BoxWish = styled(Box)(()=>({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems:'center',
  gap:'10px',
}))

const ProductsHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 0",
}));

const TypographyName = styled(Typography)(() => ({
  color: "rgba(0, 0, 0, 1)",
  fontSize: "18px",
  fontWeight: "500",
}));

const TypographyWatch = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19px",
  cursor: "pointer",
  "&:hover": {
    color: "rgba(55, 114, 255, 1)",
    textDecoration: "underline",
  },
}));

const ProductCard = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  padding: "10px",
  width: "350px",
  height: "250px",
}));

const ProductImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "10px",
}));

const ProductInfo = styled(Box)(() => ({
  width: "100%",
  padding: "10px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const TypographyTitle = styled(Typography)(() => ({
  color: "rgba(0, 0, 0, 1)",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "18px",
}));

const ProductDetails = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const BoxTypografyWait = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const BoxMeat = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));
const BoxData = styled(Box)(() => ({
  marginLeft:'10px',
  marginTop:'8px',
}));

export default WishSection;
