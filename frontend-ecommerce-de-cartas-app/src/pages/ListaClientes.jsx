import * as React from "react";
import {useContext} from "react";
import {ClienteContext} from "../contexts/ClienteContext.tsx";
import {Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {useTheme} from "@mui/material/styles";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.2 },
  { field: 'nome', headerName: 'Nome', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  {
    field: 'actions',
    headerName: 'Opções',
    width: 150,
    renderCell: (row) => (
      <MenuTresPontos id={row.id} />
    ),
  },
];

function ListaClientes() {
  const theme = useTheme();

  const {getClientes} = useContext(ClienteContext);


  return (
    <div style={{width: '100%'}}>
      <Typography variant="h6" style={{color: theme.palette.text.primary}} mb={1}>Clientes Cadastrados</Typography>
      <DataGrid
        rows={getClientes()}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 5},
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default ListaClientes;

const options = [
  'Editar',
  'Excluir',
];

const ITEM_HEIGHT = 48;

function MenuTresPontos({id}) {
  const {removeCliente} = useContext(ClienteContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    alert("Editado");
    handleClose();
  }
  const handleDelete = () => {
    removeCliente(id);
    handleClose();
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem key={"Editar"} selected={"Editar" === 'Pyxis'} onClick={handleEdit}>
          {"Editar"}
        </MenuItem>
        <MenuItem key={"Excluir"} selected={"Excluir" === 'Pyxis'} onClick={handleDelete}>
          {"Excluir"}
        </MenuItem>
    </Menu>
</div>
)
  ;
}