import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Box from '@mui/material/Box';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CartaoDeCredito() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [cartaoDeCredito, setCartaoDeCredito] = useState({
    numeroCartao : '',
    nomeCartao : '',
    bandeiraCartao : '',
    codigoDeSeguranca : ''
   });
   
   const handleChange = (event) => {
    setCartaoDeCredito({
      ...cartaoDeCredito,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
  };



  return (
    <React.Fragment>
      <Box mb={4} mt={4}>
        <Button variant="contained" onClick={handleClickOpen}>
            Cadastrar novo Cartão
        </Button>
       </Box> 
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Dados do cartão
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            <Grid item xs={12} mb={2}>
            <TextField
              name="numeroCartao"
              label="Número Cartao"
              value={cartaoDeCredito.numeroCartao}
              onChange={handleChange}
              required
              fullWidth
            />
            </Grid>
            <Grid item xs={12} mb={2}>
            <TextField
              name="nomeCartao"
              label="Nome impresso no cartão"
              value={cartaoDeCredito.nomeCartao}
              onChange={handleChange}
              required
              fullWidth
            />
            </Grid>
            <Grid item xs={12} mb={2}>
            <TextField
              name="bandeiraCartao"
              label="Bandeira Cartão"
              value={cartaoDeCredito.bandeiraCartao}
              onChange={handleChange}
              required
              fullWidth
            />
            </Grid>
            <Grid item xs={12} mb={2}>
            <TextField
              name="codigoDeSeguranca"
              label="Código de Segurança"
              value={cartaoDeCredito.codigoDeSeguranca}
              onChange={handleChange}
              required
              fullWidth
            />
            </Grid>
        </Grid>
        <DialogActions>
          <Button variant='contained' type='submit' autoFocus>
            Salvar
          </Button>
        </DialogActions>    
        </form>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}