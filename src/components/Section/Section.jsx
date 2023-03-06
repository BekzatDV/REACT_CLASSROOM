import React, { useState } from "react";
import "./Section.css";

const Section = (props) => {
  return (
    <div className="table">
      <h2>ТАБЛИЦА</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Заработок</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.salary}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Section;
