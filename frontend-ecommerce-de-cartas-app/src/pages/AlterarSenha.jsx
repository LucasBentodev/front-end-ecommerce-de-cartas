import { useState, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useParams} from 'react-router-dom';
import { ClienteContext } from '../contexts/ClienteContext.tsx';
import { Link } from 'react-router-dom';

export default function AlterarSenha() {
  const { id } = useParams();
  const { getCliente, updateCliente } = useContext(ClienteContext);

  const [cliente, setCliente] = useState(null);
  const [novaSenha, setNovaSenha] = useState('');

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        if (id) {
          const clienteData = await getCliente(parseInt(id));
          setCliente(clienteData);
        }
      } catch (error) {
        console.error('Erro ao buscar cliente:', error);
      }
    };

    fetchCliente();
  }, [id, getCliente]);

  const handleChange = (event) => {
    setNovaSenha(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cliente) {
      console.error('Cliente não encontrado.');
      return;
    }

    try {
      const clienteAtualizado = { ...cliente, senha: novaSenha };
      await updateCliente(clienteAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar senha:', error);
      // Notifica o usuário sobre o erro
      alert('Erro ao atualizar senha. Tente novamente.');
    }
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
            name="novaSenha"
            label="Nova Senha"
            value={novaSenha}
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
            <Button variant="contained" size="large" component={Link} to="/listaclientes" sx={{ mt: 2, mb: 2 }}>
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
