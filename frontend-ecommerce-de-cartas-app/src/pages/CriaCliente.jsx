import {useContext, useState} from "react";
import { Grid,TextField,Typography,Container,Button} from "@mui/material";
import Endereco from "../components/Endereco";
import CartaoDeCredito from "../components/CadastroCartao";
import CartoesCadastrados from "../components/CartoesCadastrados";
import { useTheme } from '@mui/material/styles';
import {ClienteContext} from "../contexts/ClienteContext.tsx";

function CriaCliente() {
  const {addCliente} = useContext(ClienteContext);


  const [cliente, setCliente] = useState({
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    enderecoCobranca: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      pais: '',
      cep: '',
    },
    enderecoEntrega: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      pais: '',
      cep: '',
    },
    cartaoCredito: '',
  });

  const handleChange = (event) => {
    setCliente({
      ...cliente,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCliente(cliente);
  };

  const theme = useTheme();

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" style={{ color: theme.palette.text.primary }} mt={4} mb={4} >Criar Cliente</Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} mb={2}>
          <TextField
            name="nome"
            label="Nome"
            value={cliente.nome}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField
            name="telefone"
            label="Telefone"
            value={cliente.telefone}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField
            name="email"
            label="Email"
            value={cliente.email}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField
            name="senha"
            label="Senha"
            type="password"
            value={cliente.senha}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Endereco
          title="Endereço de Cobrança"
          value={cliente.enderecoCobranca}
          onChange={handleChange}
          required/>
        <Endereco
          title="Endereço de Entrega"
          value={cliente.enderecoCobranca}
          onChange={handleChange}
          required/>
        <Grid item xs={12} mb={2}>
          <TextField
            name="cartaoCredito"
            label="Cartão de Crédito"
            value={cliente.cartaoCredito}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <CartoesCadastrados/>
        <CartaoDeCredito/>

        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Button variant="contained" type="submit" size="large"  sx={{ mt: 2,mb: 2 }}>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CriaCliente;