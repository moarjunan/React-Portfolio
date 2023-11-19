import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (fieldName, value, pattern, requiredMessage) => {
    setName(value);
    if (fieldName === "email") {
      if (value === "") {
        setEmail("");
        setErrorMessage(`Please enter a valid email address. This field is required.`);
      } else {
        const isValidEmail = pattern.test(value);
        setErrorMessage(isValidEmail ? "" : "Please enter a valid email");
      }
    } else {
      setMessage(value);
      if (value === "") {
        setMessage("");
        setErrorMessage(`Please enter a message. This field is required.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  const handleBlur = (e, fieldName, pattern, requiredMessage) => {
    const { name, value } = e.target;
    if (name === fieldName) {
      validateField(fieldName, value, pattern, requiredMessage);
    }
  };

  return (
    <>
      <div>
        <h1 style={{ display: "flex", justifyContent: "center", color: "#4E3A28" }}>
          Contact Me
        </h1>
      </div>
      <form style={{ display: "flex", justifyContent: "center", maxWidth: "50%" }}>
        <Stack spacing={2} style={{ width: "100%" }}>
          <MenuItem>
            <TextField
              value={name}
              onBlur={(e) => handleBlur(e, "name", null, "Please enter a name. This field is required.")}
              id="outlined-basic"
              label="Name"
              name="name"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "#8F9779", width: "100%" }}
            />
          </MenuItem>
          <MenuItem>
            <TextField
              value={email}
              onBlur={(e) => handleBlur(e, "email", /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please enter a valid email")}
              id="outlined-basic"
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              style={{ backgroundColor: "#8F9779", width: "100%" }}
            />
          </MenuItem>
          <MenuItem>
            <textarea
              value={message}
              onBlur={(e) => handleBlur(e, "message", null, "Please enter a message. This field is required.")}
              rows="8"
              id="outlined-basic"
              label="Message"
              name="message"
              type="text"
              variant="outlined"
              style={{ backgroundColor: "#8F9779", width: "100%", color: "black", resize: "none" }}
              placeholder="Type your message here!"
            />
          </MenuItem>
          {errorMessage && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <MenuItem style={{ justifyContent: "center" }}>
            <Button
              id="contact-button"
              className="pop-on-hover"
              xs={{ width: "100%" }}
              variant="contained"
              style={{ backgroundColor: "#4E5D44", color: "white", width: "100%" }}
            >
              Submit
            </Button>
          </MenuItem>
        </Stack>
      </form>
    </>
  );
}
