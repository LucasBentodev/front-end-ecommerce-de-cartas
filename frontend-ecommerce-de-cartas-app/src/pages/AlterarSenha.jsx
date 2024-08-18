import { useState } from 'react'; // Importação correta
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function AlterarSenha() {

  const [alterarSenha, setAlterarSenha] = useState({
    senhaAtual: '',
    novaSenha: ''
  });

  const handleChange = (event) => {
    setAlterarSenha({
      ...alterarSenha,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário
  };

  const theme = useTheme();

  return (
    <Container>
      <form onSubmit={handleSubmit}>
          <Grid item xs={12} mb={4}>
            <Typography variant="h5" align="center" style={{ color: theme.palette.text.primary }} mt={4} mb={4}>
              Alterar Senha
            </Typography>
          </Grid>
          <Grid item xs={12} mb={2}>
            <TextField
              name="senhaAtual"
              label="Senha Atual"
              value={alterarSenha.senhaAtual}
              onChange={handleChange}
              required
              fullWidth
              id="senhaAtual"
              placeholder="Digite sua senha atual"
              type="password"
            />
          </Grid>
          <Grid item xs={12} mb={2}>
            <TextField
              name="novaSenha"
              label="Nova Senha"
              value={alterarSenha.novaSenha}
              onChange={handleChange}
              required
              fullWidth
              id="novaSenha"
              placeholder="Digite sua nova senha"
              type="password"
            />
          </Grid>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
              <Button variant="contained" type="submit" size="large" sx={{ mt: 2, mb: 2 }}>
                Confirmar
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" size="large" component={Link} to="/criacliente" sx={{ mt: 2, mb: 2 }}>
                Cancelar
              </Button>
            </Grid>
          </Grid>
      </form>
    </Container>
  );
}
