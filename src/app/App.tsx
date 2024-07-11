import FriendsCard from "../entities/card/FriendsCard";
const arr = [
  {
    id: 1,
    name: "Joe Block",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s",
    counter: 89,
    wish: "Frast",
    counterTwo: 99,
    holiday: "KJBKJBKJB",
  },
];
function App() {
  return (
    <>
      <FriendsCard arrow={arr} />
    </>
  );
}

export default App;
