import React from "react";
import { Grid, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function PlayerProfile({ id, name, avalink, onNameChange, onAvaChange }) {
  const handleNameChange = (e) => {
    onNameChange(e.target.value, id);
  };
  const handleAvaChange = (e) => {
    onAvaChange(e.target.value, id);
  };

  return (
    <Grid container key={id}>
      <Grid item xs={2}>
        <Avatar alt={name} src={avalink} rows={3} />
      </Grid>
      <Grid item xs={5}>
        <TextField
          onChange={handleNameChange}
          defaultValue={name}
          label="Player Name"
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          onChange={handleAvaChange}
          defaultValue={avalink}
          label="Ava Link"
        />
      </Grid>
    </Grid>
  );
}

export default PlayerProfile;
