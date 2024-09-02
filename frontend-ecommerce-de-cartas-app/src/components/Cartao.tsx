import { useState } from "react";
import { Grid, TextField, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Checkbox, FormControlLabel } from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import React from "react";
import { Cartao as CartaoType } from '../requests/ClienteRequests';

interface CartaoDeCreditoProps {
    index: number;
    cartao: CartaoType;
    onCartaoChange: (index: number, cartao: CartaoType) => void;
}

function CartaoDeCredito({ index, cartao, onCartaoChange }: CartaoDeCreditoProps) {
    const [localCartao, setLocalCartao] = useState(cartao);

    const theme = useTheme();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setLocalCartao(prev => {
            const updatedCartao = { ...prev, [name]: newValue };
            onCartaoChange(index, updatedCartao);
            return updatedCartao;
        });
    };

    const handleBandeiraChange = (event: SelectChangeEvent<string>) => {
        const bandeira = event.target.value;
        setLocalCartao(prev => {
            const updatedCartao = { ...prev, bandeira };
            onCartaoChange(index, updatedCartao);
            return updatedCartao;
        });
    };

    return (
        <>
            <Typography variant="h6" style={{ color: theme.palette.text.primary }} mb={1}>Cartão {index + 1}</Typography>
            <Grid container spacing={2} mb={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="numero"
                        label="Número do Cartão"
                        value={localCartao.numero}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="nomeImpresso"
                        label="Nome Impresso"
                        value={localCartao.nomeImpresso}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                        <InputLabel id="bandeira-label">Bandeira</InputLabel>
                        <Select
                            labelId="bandeira-label"
                            value={localCartao.bandeira}
                            onChange={handleBandeiraChange}
                            label="Bandeira"
                        >
                            <MenuItem value="Visa">Visa</MenuItem>
                            <MenuItem value="Mastercard">Mastercard</MenuItem>
                            <MenuItem value="American Express">American Express</MenuItem>
                            <MenuItem value="Elo">Elo</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="cvv"
                        label="CVV"
                        value={localCartao.cvv}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="validade"
                        label="Validade (MM/AA)"
                        value={localCartao.validade}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="observacoes"
                        label="Observações"
                        value={localCartao.observacoes}
                        onChange={handleChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={localCartao.eCartaoPadrao}
                                onChange={handleChange}
                                name="eCartaoPadrao"
                            />
                        }
                        label="Cartão Padrão"
                    />
                </Grid>
            </Grid>
        </>
    );
}

CartaoDeCredito.propTypes = {
    index: PropTypes.number.isRequired,
    cartao: PropTypes.object.isRequired,
    onCartaoChange: PropTypes.func.isRequired,
};

export default CartaoDeCredito;