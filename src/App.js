import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Иван",
      lastName: "Иванович",
      salary: 30000,
      age: 30,
      id: 1,
    },
    {
      name: "Саламат",
      lastName: "Кадыров",
      age: 31,
      salary: "100000 наверное",
      id: 2,
    },
    {
      name: "Вася",
      lastName: "Василий",
      age: 40,
      salary: 15000,
      id: 3,
    },
    {
      name: "Катя",
      lastName: "Катерина",
      age: 15,
      salary: 90000,
      id: 4,
    },
    {
      name: "Паша",
      lastName: "Пашович",
      age: 28,
      salary: 100000,
      id: 5,
    },
    {
      name: "Тор",
      lastName: "Оденсон",
      age: 25,
      salary: 6000,
      id: 6,
    },
    {
      name: "Тони",
      lastName: "Старк",
      age: 63,
      salary: 50000,
      id: 7,
    },
  ]);

  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
