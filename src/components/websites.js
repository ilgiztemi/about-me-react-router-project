import React from "react";
import { Link } from "react-router-dom";

const Websites = () => {
  return (
    <div>
      <h1>Websites to follow:</h1>
      <table>
        <th>Websites</th>
        <th>Description</th>
        <tr>
          <td>
            <Link to={{ pathname: "https://www.seytech.co/" }} target="_blank">
              Seytech Portal
            </Link>
          </td>
          <td>Our interactive learning and tracking platform.</td>
        </tr>
        <tr>
          <td>
            <Link
              to={{ pathname: "https://www.freecodecamp.org/" }}
              target="_blank"
            >
              FreeCodecamp
            </Link>
          </td>
          <td>Online interactive platform that offers free coding classes.</td>
        </tr>
        <tr>
          <td>
            <Link
              to={{ pathname: "https://www.codecademy.com/learn" }}
              target="_blank"
            >
              Codeacademy
            </Link>
          </td>
          <td>
            Online interactive platform that offers free coding classes in 12
            different programming languages.
          </td>
        </tr>
        <tr>
          <td>
            <Link
              to={{
                pathname:
                  "https://stackoverflow.com/nocaptcha?s=923fbba5-95e2-4b7f-995b-8720b6e54220",
              }}
              target="_blank"
            ></Link>
            Stack Overflow
          </td>
          <td>
            Stack Overflow is a question and answer site for professional and
            enthusiast programmers.
          </td>
        </tr>
        <tr>
          <td>
            <Link
              to={{
                pathname:
                  "https://betterprogramming.pub/top-10-programming-blogs-in-2020-dda86feead1f",
              }}
              target="_blank"
            >
              Medium
            </Link>
          </td>
          <td>A website to read blogs about programming.</td>
        </tr>
        <tr>
          <td>
            <Link to={{ pathname: "https://fr.quora.com/" }} target="_blank">
              Quora
            </Link>
          </td>
          <td>A website to read blogs about almost anything.</td>
        </tr>
        <tr>
          <td>
            <Link
              to={{
                pathname:
                  "https://www.youtube.com/results?search_query=html+learning+projects",
              }}
              target="_blank"
            >
              Youtube
            </Link>
          </td>
          <td>Tutorial to follow and practice.</td>
        </tr>
      </table>
    </div>
  );
};

export default Websites;
