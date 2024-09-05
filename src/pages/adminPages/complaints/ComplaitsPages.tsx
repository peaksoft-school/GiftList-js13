import { useSelector } from "react-redux";
import CartMap from "../../../shared/cart/LentaCartMap";
import { RootState } from "../../../app/store/store";
const ArrowItem = [
  {
    id: 1,
    profileImg: "src/assets/images/desired-book.png",
    name: "string",
    birthday: "string",
    datePost: "01.04.2001",
    namePost: "string",
    fotoPost: "src/assets/images/desired-book.png",
    profileBlockFoto: "src/assets/images/desired-book.png",
    profileBlockState: "string",
  },
  {
    id: 2,
    profileImg: "src/assets/images/desired-book.png",
    name: "string",
    birthday: "string",
    datePost: "01.04.2001",
    namePost: "string",
    fotoPost: "src/assets/images/desired-book.png",
    profileBlockFoto: "src/assets/images/desired-book.png",
    profileBlockState: "string",
  },
  {
    id: 3,
    profileImg: "src/assets/images/desired-book.png",
    name: "string",
    birthday: "string",
    datePost: "01.04.2001",
    namePost: "string",
    fotoPost: "src/assets/images/desired-book.png",
    profileBlockFoto: "src/assets/images/desired-book.png",
    profileBlockState: "string",
  },
  {
    id: 4,
    profileImg: "src/assets/images/desired-book.png",
    name: "string",
    birthday: "string",
    datePost: "01.04.2001",
    namePost: "string",
    fotoPost: "src/assets/images/desired-book.png",
    profileBlockFoto: "src/assets/images/desired-book.png",
    profileBlockState: "string",
  },
];

const ComplaitsPages = () => {
  const { loading, complaints } = useSelector(
    (state: RootState) => state.complaits
  );

  console.log(loading, complaints);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <CartMap arrow={ArrowItem} mapType="cart" red={true} />
    </div>
  );
};

export default ComplaitsPages;
