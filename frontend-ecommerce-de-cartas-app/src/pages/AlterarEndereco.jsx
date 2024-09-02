import {useContext, useState, useEffect} from "react";
import Endereco from "../components/Endereco.tsx";
import { useTheme } from '@mui/material/styles';
import {ClienteContext} from "../contexts/ClienteContext.tsx";
import {useParams} from "react-router-dom";
import { Grid,Typography,Container,Button} from "@mui/material";

function AlterarEndereco() {
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

 


  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCliente(cliente, cliente);
  };

  const theme = useTheme();

  return (
    <Container>
         <Grid item xs={12}>
          <Typography variant="h5" align="center" style={{ color: theme.palette.text.primary }} mt={4} mb={4} >Alteração endereços do Cliente</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
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

export default AlterarEndereco;