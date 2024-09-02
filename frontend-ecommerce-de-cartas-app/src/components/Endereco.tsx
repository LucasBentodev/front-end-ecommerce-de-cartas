import { useState, useEffect } from "react";
import { Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import React from "react";
import { Endereco as EnderecoType } from '../requests/ClienteRequests';

interface EnderecoProps {
    index: number;
    endereco: EnderecoType;
    onEnderecoChange: (index: number, endereco: EnderecoType) => void;
}

function Endereco({ index, endereco, onEnderecoChange }: EnderecoProps) {
    const [localEndereco, setLocalEndereco] = useState(endereco);

    const theme = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLocalEndereco(prev => {
            const updatedEndereco = { ...prev, [name]: value };
            console.log(`Endereço atualizado para índice ${index}:`, updatedEndereco);
            onEnderecoChange(index, updatedEndereco);
            return updatedEndereco;
        });
    };

    const handleTipoChange = (event: SelectChangeEvent<string>) => {
        const tipo = event.target.value;
        setLocalEndereco(prev => {
            const updatedEndereco = { ...prev, tipoLogradouro: tipo };
            onEnderecoChange(index, updatedEndereco);
            return updatedEndereco;
        });
    };
    return (
        <>
            <Typography variant="h6" style={{ color: theme.palette.text.primary }} mb={1}>Endereço {index + 1}</Typography>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="tipoResidencia"
                        label="Tipo de Residência"
                        value={localEndereco.tipoResidencia}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel id="tipo-logradouro-label">Tipo de Logradouro</InputLabel>
                        <Select
                            labelId="tipo-logradouro-label"
                            value={localEndereco.tipoLogradouro}
                            onChange={handleTipoChange}
                            label="Tipo de Logradouro"
                        >
                            <MenuItem value="Entrega">Entrega</MenuItem>
                            <MenuItem value="Cobrança">Cobrança</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="logradouro"
                        label="Logradouro"
                        value={localEndereco.logradouro}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="numero"
                        label="Número"
                        value={localEndereco.numero}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="bairro"
                        label="Bairro"
                        value={localEndereco.bairro}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="cep"
                        label="CEP"
                        value={localEndereco.cep}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="cidade"
                        label="Cidade"
                        value={localEndereco.cidade}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="estado"
                        label="Estado"
                        value={localEndereco.estado}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="pais"
                        label="País"
                        value={localEndereco.pais}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="observacoes"
                        label="Observações"
                        value={localEndereco.observacoes}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </>
    );
}

Endereco.propTypes = {
    index: PropTypes.number.isRequired,
    endereco: PropTypes.object.isRequired,
    onEnderecoChange: PropTypes.func.isRequired,
};

export default Endereco;
