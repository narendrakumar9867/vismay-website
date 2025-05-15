import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  background: "linear-gradient(135deg, #001f3f, #003366)", 
  padding: "12px 24px",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  transition: "all 0.3s ease-in-out",
  '&:hover': {
    background: "linear-gradient(135deg, #FFD700, #FFA500)", 
    color: "#000",
    transform: "scale(1.05)",
    boxShadow: "0 0 15px 5px rgba(255,215,0,0.5)", 
  },

  [theme.breakpoints.down('sm')]: {
    padding: "8px 16px",
    fontSize: "0.8rem",
    borderRadius: "10px",
  }
}));

export default function CustomizedButtons() {
  return (
    <Stack 
      spacing={2}
      direction="row"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <ColorButton variant="contained" href="https://linktr.ee/VISMAY25">
        🚀 Register Now
      </ColorButton>
    </Stack>
  );
}
