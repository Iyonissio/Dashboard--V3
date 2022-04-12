// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import PaymentsIcon from '@mui/icons-material/Payments';

import { React, useEffect, useState } from 'react';
import { baseurl } from '../../../lib/settings';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 74;

export default function AppWeeklySales() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    baseurl.get('api/auth/payments/').then((response) => {
      setRows(response.data);
    });
  }, []);

  const TOTAL = rows.length;
  // armazena o valor da variavel TOTAL
  // localStorage.setItem('msisdn', TOTAL);

  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Iconify icon="ant-design:android-filled" width={24} height={24} /> */}
        <PaymentsIcon />
      </IconWrapperStyle>
      {/* <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography> */}
      <Typography variant="h3">{TOTAL}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total pagamentos
      </Typography>
    </RootStyle>
  );
}
