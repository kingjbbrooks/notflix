import React, { useEffect, useState } from "react";
import styles from "./Favourites.module.css";
import Carousel from "../Carousel/Carousel";

export default function Favourites(props) {
  const [message, setMessage] = useState("");
  const { getAccessToken } = props.auth;

  useEffect(() => {
    fetch("/private", {
      headers: { Authorization: `Bearer ${getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network respones was not ok.");
      })
      .then(response => setMessage(response.message))
      .catch(error => setMessage(error.message));
  }, [message]);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>My List</h1>
      </div>
      <div>{/* <Carousel key={5} {...props} /> */}</div>
      <p>{message}</p>
    </div>
  );
}