import { AppBar, Toolbar, Typography } from '@mui/material';

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
      </Toolbar>
    </AppBar>
  );
}

export default Header;