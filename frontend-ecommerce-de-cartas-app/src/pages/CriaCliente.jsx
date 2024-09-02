import { useContext, useState } from "react";
import { Grid, TextField, Typography, Container, Button } from "@mui/material";
import Endereco from "../components/Endereco.tsx";
import Cartao from "../components/Cartao.tsx";
import { useTheme } from '@mui/material/styles';
import { ClienteContext } from "../contexts/ClienteContext.tsx";

function CriaCliente() {
  const { addCliente } = useContext(ClienteContext);

  const [cliente, setCliente] = useState({
    nome: '',
    telefone: {
      tipo: '',
      ddd: '',
      numero: ''
    },
    email: '',
    senha: '',
    cpf: '',
    genero: '',
    ativo: true,
    enderecos: [
      {
        tipoResidencia: '',
        tipoLogradouro: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        pais: '',
        observacoes: '',
        eEnderecoCobranca: false,
        eEnderecoEntregaPadrao: false,
      },
    ],
    cartoes: [
      {
        numero: '',
        nomeImpresso: '',
        bandeira: '',
        cvv: '',
        validade: '',
        observacoes: '',
        eCartaoPadrao: false,
      },
    ],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTelefoneChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevState) => ({
      ...prevState,
      telefone: {
        ...prevState.telefone,
        [name]: value,
      },
    }));
  };

  const handleEnderecoChange = (enderecoIndex, endereco) => {
    const updatedEnderecos = [...cliente.enderecos];
    updatedEnderecos[enderecoIndex] = endereco;
    setCliente((prevState) => ({
      ...prevState,
      enderecos: updatedEnderecos,
    }));
  };

  const handleAddEndereco = () => {
    setCliente((prevState) => ({
      ...prevState,
      enderecos: [
        ...prevState.enderecos,
        {
          tipoResidencia: '',
          tipoLogradouro: '',
          logradouro: '',
          numero: '',
          bairro: '',
          cep: '',
          cidade: '',
          estado: '',
          pais: '',
          observacoes: '',
          eEnderecoCobranca: false,
          eEnderecoEntregaPadrao: false,
        },
      ],
    }));
  };

  const handleCartaoChange = (cartaoIndex, cartao) => {
    const updatedCartoes = [...cliente.cartoes];
    updatedCartoes[cartaoIndex] = cartao;
    setCliente((prevState) => ({
      ...prevState,
      cartoes: updatedCartoes,
    }));
  };

  const handleAddCartao = () => {
    setCliente((prevState) => ({
      ...prevState,
      cartoes: [
        ...prevState.cartoes,
        {
          numero: '',
          nomeImpresso: '',
          bandeira: '',
          cvv: '',
          validade: '',
          observacoes: '',
          eCartaoPadrao: false,
        },
      ],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCliente(cliente);
  };

  const theme = useTheme();

  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" style={{ color: theme.palette.text.primary }} mt={4} mb={4}>
          Criar Cliente
        </Typography>
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
            name="tipo"
            label="Tipo de Telefone"
            value={cliente.telefone.tipo}
            onChange={handleTelefoneChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField
            name="ddd"
            label="DDD"
            value={cliente.telefone.ddd}
            onChange={handleTelefoneChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField
            name="numero"
            label="Número de Telefone"
            value={cliente.telefone.numero}
            onChange={handleTelefoneChange}
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
        <Grid item xs={12} mb={2}>
          <TextField
            name="cpf"
            label="CPF"
            value={cliente.cpf}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} mb={2}>
          <TextField
            name="genero"
            label="Gênero"
            value={cliente.genero}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        {cliente.enderecos.map((endereco, index) => (
          <Endereco
            key={index}
            index={index}
            endereco={endereco}
            onEnderecoChange={handleEnderecoChange}
          />
        ))}
        <Grid item xs={12} mb={2}>
          <Button
            variant="contained"
            onClick={handleAddEndereco}
            sx={{ mt: 2, mb: 2 }}
          >
            Adicionar Endereço
          </Button>
        </Grid>
        {cliente.cartoes.map((cartao, index) => (
          <Cartao
            key={index}
            index={index}
            cartao={cartao}
            onCartaoChange={handleCartaoChange}
          />
        ))}
        <Grid item xs={12} mb={2}>
          <Button
            variant="contained"
            onClick={handleAddCartao}
            sx={{ mt: 2, mb: 2 }}
          >
            Adicionar Cartão
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Button variant="contained" type="submit" size="large" sx={{ mt: 2, mb: 2 }}>
              Cadastrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default CriaCliente;