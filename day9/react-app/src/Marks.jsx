import React from "react";
import "./Marks.css";
const Marks = ({m1,m2,m3}) => {
  return (
    <div>
      <h1>Semester-Marks</h1>
      <table>
        <th>
          <tr>
            <td>Subject</td>
            <td>Marks</td>
          </tr>
        </th>
        <tr>
          <td>Maths</td>
          <td>{m1}</td>
        </tr>
        <tr>
          <td>Maths</td>
          <td>{m2}</td>
        </tr>
        <tr>
          <td>Maths</td>
          <td>{m3}</td>
        </tr>
      </table>
    </div>
  );
};

export default Marks;