import { useState } from "react";
import CartMap from "../entities/cart/LentaCartMap";

const arr = [
  {
    id: 1,
    profileImg:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Аида Каримова",
    birthday: "01.02.2001",
    namePost: "Письма Элджертона",
    fotoPost:
      "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
    datePost: "12.04.22",
    profileBlockFoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECIXsJN1ydUS3A6MZMll_KFxz2YCqh1XuQ&s",
    profileBlockState: "Забронирован",
  },
  {
    id: 2,
    profileImg:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Аида Каримова",
    birthday: "01.02.2001",
    namePost: "Письма Элджертона",
    fotoPost:
      "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
    datePost: "12.04.22",
    profileBlockFoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECIXsJN1ydUS3A6MZMll_KFxz2YCqh1XuQ&s",
    profileBlockState: "Забронирован",
  },
  {
    id: 3,
    profileImg:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Аида Каримова",
    birthday: "01.02.2001",
    namePost: "Письма Элджертона",
    fotoPost:
      "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
    datePost: "12.04.22",
    profileBlockFoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECIXsJN1ydUS3A6MZMll_KFxz2YCqh1XuQ&s",
    profileBlockState: "Забронирован",
  },
  {
    id: 4,
    profileImg:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Аида Каримова",
    birthday: "01.02.2001",
    namePost: "Письма Элджертона",
    fotoPost:
      "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
    datePost: "12.04.22",
    profileBlockFoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECIXsJN1ydUS3A6MZMll_KFxz2YCqh1XuQ&s",
    profileBlockState: "Забронирован",
  },
  {
    id: 5,
    profileImg:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Аида Каримова",
    birthday: "01.02.2001",
    namePost: "Письма Элджертона",
    fotoPost:
      "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
    datePost: "12.04.22",
    profileBlockFoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECIXsJN1ydUS3A6MZMll_KFxz2YCqh1XuQ&s",
    profileBlockState: "Забронирован",
  },
  {
    id: 6,
    profileImg:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Аида Каримова",
    birthday: "01.02.2001",
    namePost: "Письма Элджертона",
    fotoPost:
      "https://s0.rbk.ru/v6_top_pics/media/img/4/74/756256715374744.jpg",
    datePost: "12.04.22",
    profileBlockFoto:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRECIXsJN1ydUS3A6MZMll_KFxz2YCqh1XuQ&s",
    profileBlockState: "Забронирован",
  },
];

function App() {
  const [maptype, setMapType] = useState("cart");
  function list() {
    setMapType("list");
  }
  function cart() {
    setMapType("cart");
  }
  return (
    <>
      <button onClick={cart}>cart</button>
      <button onClick={list}>list</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <CartMap arrow={arr} mapType={maptype} />
      </div>
    </>
  );
}

export default App;
