import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{  
    field: 'id', 
    headerName: 'ID',
    width: 40
  },
  { 
    field: 'time', 
    headerName: 'Time',
    width: 150 
  },
  {
    field: 'wind_speed_10m',
    headerName: 'Wind Speed',
    width: 90
  },
  {
    field: 'temperature_2m',
    headerName: 'Temperature',
    width: 90
  },
  {
    field: 'relative_humidity_2m',
    headerName:  'Relative Humidity',
    width: 90
  }
];

const rows = [
  { id: 1, time: 1, wind_speed_10m: 'Snow', temperature_2m: 'Jon', relative_humidity_2m: 14 }
];


function GridTable(props) {

    const { resultsJSON } = props;
   
    //Implementer la recuperation des données ...
    //parsing results et creation entrée du tableau




  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel = {{id: false}}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default GridTable;