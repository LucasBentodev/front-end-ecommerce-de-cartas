import {useContext} from "react";
import {ClienteContext} from "../contexts/ClienteContext.tsx";
import {Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import MenuTresPontos from "../components/MenuTresPontos.jsx";
import {useTheme} from "@mui/material/styles";

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.2 },
  { field: 'nome', headerName: 'Nome', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  {
    field: 'actions',
    headerName: 'Opções',
    width: 150,
    renderCell: () => (
      <MenuTresPontos/>
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