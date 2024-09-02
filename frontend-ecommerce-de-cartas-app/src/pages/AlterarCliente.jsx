import {useContext, useState, useEffect} from "react";
import { Grid,TextField,Typography,Container,Button} from "@mui/material";
import Endereco from "../components/Endereco.tsx";
import Cartao from "../components/Cartao.tsx";
import { useTheme } from '@mui/material/styles';
import {ClienteContext} from "../contexts/ClienteContext.tsx";
import {useParams} from "react-router-dom";

function AlterarCliente() {
  const {id} = useParams();

  const {getCliente, updateCliente} = useContext(ClienteContext);

  const [cliente, setCliente] = useState(getCliente(id));

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
    setCliente({
      ...cliente,
      [event.target.name]: event.target.value,
    });
  };

  const handleEnderecoChange = (enderecoIndex, endereco) => {
    const updateEnd = [...cliente.enderecos];
    updateEnd[enderecoIndex] = endereco;
    setCliente(prevState => ({
      ...prevState,
      enderecos: updateEnd,
    }));
  };

  const handleAddEndereco = () => {
    setCliente(prevState => ({
      ...prevState,
      enderecos: [...prevState.enderecos, {
        tipoResidencia: '', 
        tipLogradouro: '',
        logradouro: '',
        numero: '',
        bairro: '',
        cep: '',
        cidade: '',
        estado: '',
        pais: '',
        observacoes: '',
        enderecoCobranca: '',
        enderecoEntregaPadrao: '',
      }]
    }));
  };

  const handleCartaoChange = (cartaoIndex, cartao) => {
    const updatedCartoes = [...cliente.cartoes];
    updatedCartoes[cartaoIndex] = cartao;
    setCliente(prevState => ({
      ...prevState,
      cartoes: updatedCartoes,
    }));
  };

  const handleAddCartao = () => {
    setCliente(prevState => ({
      ...prevState,
      cartoes: [...prevState.cartoes, {
        numero:'',
        nomeImpresso:'',
        bandeira:'',
        cvv:'',
        validade:'',
        observacoes:'',
      }]
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCliente(cliente, cliente);
  };

  const theme = useTheme();

  return (
    <Container>
         <Grid item xs={12}>
          <Typography variant="h5" align="center" style={{ color: theme.palette.text.primary }} mt={4} mb={4} >Alteração dados do Cliente</Typography>
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
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          {cliente.enderecos && Array.isArray(cliente.enderecos) && cliente.enderecos.length > 0 ? (
    cliente.enderecos.map((endereco, index) => (
       <Endereco
         key={index}
         index={index}
         endereco={endereco}
         onEnderecoChange={(updatedIndex, updatedEndereco) => handleEnderecoChange(updatedIndex, updatedEndereco)}
       />
    ))
  ) : (
    <Typography variant="body1">Nenhum endereço encontrado.</Typography>
  )}
        <Grid item xs={12} mb={2}>
          <Button
            variant="contained"
            onClick={handleAddEndereco}
            sx={{ mt: 2, mb: 2 }}
          >
            Adicionar Endereço
          </Button>
        </Grid>
          {cliente.cartoes && Array.isArray(cliente.cartoes) && cliente.cartoes.length > 0 ? (
          cliente.cartoes.map((cartao, index) => (
              <Cartao
                key={index}
                index={index}
                cartao={cartao}
                onCartaoChange={(index,updatedCartoes) => handleCartaoChange(index, updatedCartoes)}
              />
            ))
          ) : (
            <Typography variant="body1">Nenhum endereço encontrado.</Typography>
          )}
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
              <Button variant="contained" type="submit" size="large"  sx={{ mt: 2,mb: 2 }}>
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </form>
    </Container>
  );
}

export default AlterarCliente;