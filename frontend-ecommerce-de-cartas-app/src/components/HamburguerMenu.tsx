import { useState } from 'react'; // Importação correta
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import React from 'react';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Início', to: '/'},
    { text: 'Criar Cliente', to: '/criacliente'},
    { text: 'Alterar Cliente', to: '/alterarcliente'},
    { text: 'Inativar Cliente', to: '/inativarCliente'},
    { text: 'Alterar Senha', to: '/alterarSenha'} 
  ];

  return (
    <>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} component={Link} to={item.to} onClick={toggleDrawer}>
              <ListItemButton>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
