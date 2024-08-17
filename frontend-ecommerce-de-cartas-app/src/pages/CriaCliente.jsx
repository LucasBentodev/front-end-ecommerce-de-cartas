import {useState} from "react";
import {Button, Container, Grid, TextField, Typography} from "@mui/material";

function CriaCliente() {
  const [cliente, setCliente] = useState({
    nome: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
    email: '',
    senha: '',
    enderecoResidencial: '',
    enderecoEntrega: '',
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
    // Aqui você pode lidar com a submissão do formulário, por exemplo, enviando os dados para uma API.
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4">Cadastro de Cliente</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <TextField
              name="nome"
              label="Nome"
              value={cliente.nome}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="dataNascimento"
              label="Data de Nascimento"
              type="date"
              value={cliente.dataNascimento}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="cpf"
              label="CPF"
              value={cliente.cpf}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="telefone"
              label="Telefone"
              value={cliente.telefone}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              value={cliente.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <TextField
              name="enderecoResidencial"
              label="Endereço Residencial"
              value={cliente.enderecoResidencial}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="enderecoEntrega"
              label="Endereço de Entrega"
              value={cliente.enderecoEntrega}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="cartaoCredito"
              label="Cartão de Crédito"
              value={cliente.cartaoCredito}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit">Cadastrar</Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default CriaCliente;