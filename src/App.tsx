import * as React from 'react';
import { Grid, Button, Typography } from '@mui/material';

const { useState } = React;

function App() {
  const [isNameVisible, setIsNameVisible] = useState(false);

  const name = 'Jazmyne';
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <header
        style={{
          backgroundColor: '#282c34',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
          <Grid item>
            <Button onClick={() => setIsNameVisible(!isNameVisible)}>Pick a Name</Button>
          </Grid>
          <Grid item sx={{ height: 100, width: 500 }}>
            {isNameVisible ? <Typography variant="h4">{name}</Typography> : null}
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
