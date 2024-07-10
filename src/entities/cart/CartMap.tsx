import styled from "styled-components";
import { CartMapProps } from "../lib/helpers/LentaCart";

const CartMap: React.FC<CartMapProps> = ({ arrow, mapType }) => {
  return (
    <>
      {arrow?.map((item) => (
        <Container
          key={item.id}
          style={{
            padding: "20px",
          }}
        >
          {mapType === "list" && (
            <div>
              <img
                style={{
                  width: "150px",
                  height: "110px",
                  borderRadius: "10px",
                  marginRight: "20px  ",
                }}
                src={item.fotoPost}
              />
            </div>
          )}
          <div style={{ width: "320px" }}>
            <div>
              <AvaStyleContainer>
                <AvaStyle>
                  <img
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                    }}
                    src={item.profileImg}
                  />
                  <p style={{ fontWeight: "bold" }}>{item.name}</p>
                </AvaStyle>
                <p style={{ color: "#0BA360" }}>{item.birthday}</p>
              </AvaStyleContainer>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  margin: "10px 0",
                }}
              >
                {item.namePost}
              </p>
            </div>

            {mapType === "cart" && (
              <div>
                <img
                  style={{
                    width: "320px",
                    height: "157px",
                    borderRadius: "10px",
                  }}
                  src={item.fotoPost}
                />
              </div>
            )}

            <AvaStyleContainer style={{ color: "#636C84", fontSize: "18px" }}>
              <p>12.04.22</p>

              <AvaStyle>
                <AvaStyle>
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                    src={item.profileBlockFoto}
                  />
                  <span
                    style={{
                      padding: "10px",
                    }}
                  >
                    {item.profileBlockState}
                  </span>
                </AvaStyle>
                <p>...</p>
              </AvaStyle>
            </AvaStyleContainer>
          </div>
        </Container>
      ))}
    </>
  );
};

export default CartMap;

const Container = styled.div`
  display: flex;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

const AvaStyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AvaStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
