import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const dayName = now.toLocaleString("en-US", { weekday: "short" });
      const monthName = now.toLocaleString("en-US", { month: "short" });
      const day = now.getDate();

      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      hours = String(hours).padStart(2, "0");

      const formattedDateTime = `${dayName}  ${monthName} ${day} | ${hours}:${minutes}:${seconds} ${ampm}`;
      setDateTime(formattedDateTime);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTime;
