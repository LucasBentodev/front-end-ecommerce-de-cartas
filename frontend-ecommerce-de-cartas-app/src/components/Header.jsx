import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(45deg, #1976d2 20%, #64b5f6 80%)', // Gradiente do Azul Padrão para Azul Claro
        }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "white" }}>
          E-Commerce de Cartas
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/criacliente">Cria Cliente</Button>
        <Button color="inherit" component={Link} to="/alterarcliente">Alterar Cliente</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;