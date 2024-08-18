import { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

function Endereco({ title }) {
    const [endereco, setEndereco] = useState({
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
    });

    const theme = useTheme();

    const handleChange = (event) => {
        setEndereco({
            ...endereco,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <Typography variant="h6" style={{ color: theme.palette.text.primary }} mb={1}>{title}</Typography>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="tipoResidencia"
                        label="Tipo de Residência"
                        value={endereco.tipoResidencia}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="tipoLogradouro"
                        label="Tipo de Logradouro"
                        value={endereco.tipoLogradouro}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="logradouro"
                        label="Logradouro"
                        value={endereco.logradouro}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="numero"
                        label="Número"
                        value={endereco.numero}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="bairro"
                        label="Bairro"
                        value={endereco.bairro}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="cep"
                        label="CEP"
                        value={endereco.cep}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="cidade"
                        label="Cidade"
                        value={endereco.cidade}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="estado"
                        label="Estado"
                        value={endereco.estado}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="pais"
                        label="País"
                        value={endereco.pais}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="observacoes"
                        label="Observações"
                        value={endereco.observacoes}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </>
    );
}

Endereco.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Endereco;
