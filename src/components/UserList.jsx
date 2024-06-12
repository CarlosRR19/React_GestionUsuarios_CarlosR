/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  });

  const handleInfo = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (idUser) => {
    var data = {
      id: idUser,
    };

    fetch("https://www.melivecode.com/api/users/delete", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto",
            color: "blue",
            margin: "0 20px 10px 0px",
          }}
        >
          USUARIOS
        </h1>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submit"
          href="/create"
          style={{ minWidth: "80px" }}
        >
          Crear
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Imagen</StyledTableCell>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Apellido</StyledTableCell>
              <StyledTableCell align="center">
                Nombre de usuario
              </StyledTableCell>
              <StyledTableCell align="center">Accion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row" align="center">
                  {user.id}
                </TableCell>
                <TableCell align="center">
                  <Avatar
                    alt={user.fname}
                    src={user.avatar}
                    style={{ display: "block", margin: "0 auto" }}
                  />
                </TableCell>
                <TableCell component="th" scope="row" align="center">
                  {user.fname}
                </TableCell>
                <TableCell align="center">{user.lname}</TableCell>
                <TableCell align="center">{user.username}</TableCell>
                <TableCell align="center">
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleInfo(user.id)}
                  >
                    <Button variant="outlined">Editar</Button>
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Button variant="outlined">Borrar</Button>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserList;
