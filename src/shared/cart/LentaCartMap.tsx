import styled from "styled-components";
import { FC } from "react";
import { Button } from "@mui/material";
import threeDots from "../../assets/icon/threeDots.svg";
import { CartMapProps } from "../lib/types/LentaCart";

const CartMap: FC<CartMapProps> = ({ arrow, mapType }) => (
  <>
    {arrow?.map(
      ({
        id,
        profileImg,
        name,
        birthday,
        namePost,
        fotoPost,
        datePost,
        profileBlockFoto,
        profileBlockState,
      }) => (
        <StyledContainer key={id}>
          {mapType === "list" && (
            <div>
              <StyledListFoto src={fotoPost} />
            </div>
          )}
          <StyledContainerData>
            <div>
              <StyledAvaContainer>
                <StyledAva>
                  <StyledAvaImg src={profileImg} />
                  <StyledName>{name}</StyledName>
                </StyledAva>
                <StyledBirthday>{birthday}</StyledBirthday>
              </StyledAvaContainer>
              <StyledNamePost>{namePost}</StyledNamePost>
            </div>

            {mapType === "cart" && (
              <div>
                <StyledCartFoto src={fotoPost} />
              </div>
            )}

            <StyledAvaContainerTwo>
              <p>{datePost}</p>

              <StyledAva>
                <StyledAva>
                  <StyledProfileBlockFoto src={profileBlockFoto} />
                  <StyledProfileBlockState>
                    {profileBlockState}
                  </StyledProfileBlockState>
                </StyledAva>
                <Button>
                  <img src={threeDots} />
                </Button>
              </StyledAva>
            </StyledAvaContainerTwo>
          </StyledContainerData>
        </StyledContainer>
      )
    )}
  </>
);

export default CartMap;

const StyledContainer = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
`;

const StyledContainerData = styled.div`
  width: 320px;
`;

const StyledAvaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAvaContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #636c84;
  font-size: 18px;
`;

const StyledAva = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledListFoto = styled.img`
  width: 150px;
  height: 110px;
  border-radius: 10px;
  margin-right: 20px;
`;

const StyledCartFoto = styled.img`
  width: 320px;
  height: 157px;
  border-radius: 10px;
`;

const StyledAvaImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  margin-right: 15px;
`;

const StyledNamePost = styled.p`
  font-weight: bold;
  font-size: 17px;
  margin: 10px 0;
`;

const StyledProfileBlockFoto = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const StyledName = styled.p`
  font-weight: bold;
`;

const StyledBirthday = styled.p`
  color: #0ba360;
`;

const StyledProfileBlockState = styled.span`
  padding: 10px;
`;
