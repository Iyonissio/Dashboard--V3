import * as React from 'react';
import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import { baseurl } from "../../lib/settings";
import { DataGrid } from '@mui/x-data-grid';
import { baseurl } from '../../../lib/settings';

export default function Tabelaoperacoesnaoconcluidas() {
  const [requisicoes, setRequisicoes] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'phone', headerName: 'Celular', width: 130 },
    { field: 'date', headerName: 'Data', width: 140 },
    { field: 'trasantion_type', headerName: 'Operacao', width: 370 }
  ];

  const getRequisicoes = async () => {
    baseurl.get('api/auth/all_requests').then((response) => {
      setRequisicoes(response.data);
    });
  };

  useEffect(() => {
    getRequisicoes();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={requisicoes}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
