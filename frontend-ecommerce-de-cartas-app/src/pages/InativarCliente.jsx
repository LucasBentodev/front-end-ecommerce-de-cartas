import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';



export default function InativarCliente() {

  const [inativarCliente, setInativarCliente] = useState({
        motivo : '',
        sugestaoDeMelhoria : ''
   });
   
   const handleChange = (event) => {
    setInativarCliente({
      ...inativarCliente,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();

  return (
    <Container>
        <form onSubmit={handleSubmit}>
            <Grid item xs={12} mb={4}>
                   <Typography variant="h5" align="center" style={{ color: theme.palette.text.primary }} mt={4} mb={4} >Inativar Cadastro</Typography>
            </Grid>
            <Grid item xs={12} mb={2}>
                <TextField
                    name="motivo"
                    label="Motivo"
                    value={inativarCliente.motivo}
                    onChange={handleChange}
                    required
                    fullWidth
                    id="outlined-textarea"
                    placeholder="Placeholder"
                    multiline
                />
            </Grid>
            <Grid item xs={12} mb={2}>
                <TextField
                    name="sugestaoDeMelhoria"
                    label="Sugestão de Melhoria"
                    value={inativarCliente.sugestaoDeMelhoria}
                    onChange={handleChange}
                    required
                    fullWidth
                    id="outlined-textarea"
                    placeholder="Placeholder"
                    multiline
                />
            </Grid>  
            <Grid container alignItems="center" justifyContent="center" spacing={2}>
                <Grid item>
                    <Button variant="contained" type="submit" size="large" component={Link} to="/criacliente"  sx={{ mt: 2,mb: 2 }}>
                        Confirmar
                    </Button>
                </Grid>
                <Grid item>    
                    <Button variant="contained"  size="large" component={Link} to="/criacliente"  sx={{ mt: 2,mb: 2 }}>
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Container>
  );
}