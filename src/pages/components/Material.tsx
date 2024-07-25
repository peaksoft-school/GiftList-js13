import { FC } from "react";
import styled from "styled-components";

const Material: FC = () => {
  return (
    <Container>
      <div>
        <h1>Материал</h1>
      </div>
    </Container>
  );
};

export default Material;

const Container = styled.div`
  width: 100%;
  height: 93vh;
  position: relative;
`;
