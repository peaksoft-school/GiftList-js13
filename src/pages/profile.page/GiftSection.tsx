import { Box, Grid, styled, Typography } from "@mui/material";
import { gifts } from "../../shared/lib/types/userProfile";
import Meatballs from "../../shared/UI/Meatballs";
import { DataType } from "../../shared/lib/types/MeatballType";

interface GiftSectionProps {
  gifts: typeof gifts;
  handleShowAll: () => void;
  showAll: boolean;
}
const meatballsData: DataType[] = [
  {
    id: 1,
    title: "Option 1",
    icon: "",
    onClick: () => {},
  },
  { id: 2, title: "Option 2", icon: "" },
];

const GiftSection: React.FC<GiftSectionProps> = ({ gifts, handleShowAll, showAll }) => {
  return (
    <Section>
      <ProductsHeader>
        <TypographyName variant="h6">Желаемые подарки</TypographyName>
        <TypographyWatch variant="body1" onClick={handleShowAll}>
          {showAll ? "Скрыть" : "Смотреть все"}
        </TypographyWatch>
      </ProductsHeader>
      <Grid container spacing={2}>
        {gifts.map(gift => (
          <Grid item xs={12} sm={6} md={4} key={gift.id}>
            <ProductCard>
              <ProductImage src={gift.imageUrl} alt={gift.title} />
              <ProductInfo>
                <TypographyTitle variant="body1">{gift.title}</TypographyTitle>
                <Typography variant="body2">{gift.description}</Typography>
              </ProductInfo>
              <ProductDetails>
                <Typography variant="body2">{gift.date}</Typography>
                <BoxTypografyWait>
                  <Typography variant="body1">{gift.pending}</Typography>
                  <Meatballs data={meatballsData}/>
                </BoxTypografyWait>
              </ProductDetails>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

const Section = styled(Box)(() => ({
  marginBottom: "20px",
}));

const ProductsHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 0",
}));

const TypographyName=styled(Typography)(()=>({
  color:'rgba(0, 0, 0, 1)',
  fontSize:'18px',
  fontWeight:'500',
}))
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

const TypographyTitle = styled(Typography)(()=>({
  color:'rgba(0, 0, 0, 1)',
  fontSize:'14px',
  fontWeight:'600',
  lineHeight:'18px',
}))

const ProductDetails = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const BoxTypografyWait = styled(Box)(() => ({
  display: "flex",
  alignItems:'center',
}));



export default GiftSection;
