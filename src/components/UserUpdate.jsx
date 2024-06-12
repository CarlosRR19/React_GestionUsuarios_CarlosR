/* eslint-disable no-unused-vars */
import React from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Avatar } from "@mui/material";

const UserUpdate = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://www.melivecode.com/api/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setNombre(result.user.fname);
        setApellido(result.user.lname);
        setAvatar(result.user.avatar);
        setUsername(result.user.username);
      });
  }, []);

  const updateUser = () => {
    var data = {
      id: id,
      fname: nombre,
      lname: apellido,
      username: username,
      avatar: avatar,
    };

    fetch("https://www.melivecode.com/api/users/update", {
      method: "PUT",
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
          Datos del usuario:
        </Typography>
        <form onSubmit={updateUser} action="PUT">
          <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                label="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
                fullWidth
              />
              <TextField
                name="lastName"
                variant="outlined"
                required
                label="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                fullWidth
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <TextField
                name="username"
                variant="outlined"
                required
                label="Nombre de Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
              />
              <TextField
                name="avatar"
                variant="outlined"
                required
                label="Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                fullWidth
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
              style={{ marginTop: "20px" }}
            >
              Actualizar Usuario
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
};

export default UserUpdate;
