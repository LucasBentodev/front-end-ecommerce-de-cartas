import { DataGrid } from '@mui/x-data-grid';
import MenuTresPontos from './MenuTresPontos';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'ID', flex: 0.2 },
  { field: 'nomeCartao', headerName: 'Nome impresso no Cartão', flex: 1 },
  { field: 'numeroCartao', headerName: 'Número do cartão', flex: 1 },
  { field: 'bandeiraCartao', headerName: 'Bandeira do Cartão', flex: 1 },
  { field: 'codigoDeSeguranca',headerName: 'Código de Segurança', flex: 1},
  {
    field: 'actions',
    headerName: 'Opções',
    width: 150,
    renderCell: () => (
      <MenuTresPontos/>
    ),
  },
];



const rows = [
  { id: 1, nomeCartao: 'YUSUKE URAMESHI', numeroCartao: '4444 3333 2222 111', bandeiraCartao: 'Visa', codigoDeSeguranca: '187' },
];


export default function CartoesCadastrados() {
  
  const theme = useTheme();
  return (
    <div style={{width: '100%' }}>
     <Typography variant="h6" style={{ color: theme.palette.text.primary }} mb={1}>Cartões cadastrados</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}