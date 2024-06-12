/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  const volver = () => {
    navigate("/");
  };

  const createUser = () => {
    var data = {
      fname: nombre,
      lname: apellido,
      username: username,
      password: "contraseña",
      email: email,
      avatar: avatar,
    };

    fetch("https://www.melivecode.com/api/users/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/");
  };

  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          marginTop: "8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ p: 5 }} component="h1" variant="h5">
          Datos del nuevo usuario:
        </Typography>
        <form onSubmit={createUser}>
          <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                label="Nombre"
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
                fullWidth
                style={{ flex: 1 }}
              />
              <TextField
                name="lastName"
                variant="outlined"
                required
                label="Apellido"
                onChange={(e) => setApellido(e.target.value)}
                fullWidth
                style={{ flex: 1 }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <TextField
                name="userName"
                variant="outlined"
                required
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
                style={{ marginBottom: "20px" }}
              />
              <TextField
                name="email"
                variant="outlined"
                required
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                style={{ marginBottom: "20px" }}
              />
              <TextField
                name="avatar"
                variant="outlined"
                required
                label="Avatar"
                onChange={(e) => setAvatar(e.target.value)}
                fullWidth
                style={{ marginBottom: "20px" }}
              />
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Crear Usuario
            </Button>
          </div>
        </form>
      </Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={volver}>
          Volver
        </Button>
      </div>
    </>
  );
};

export default UserCreate;
