import React from "react";

import { DialogActions, Dialog, Button, DialogTitle } from "@material-ui/core";

export default function Dialogo(props) {
  const { open, title, onClose, onConfirm } = props;
  return (
    <Dialog open={open} onClose={() => onClose()}>
      <DialogTitle title={title || "Deseja Excluir?"}></DialogTitle>
      <DialogActions className="d-flex justify-content-center mb-2">
        <Button onClick={() => onClose()}>Não</Button>
        <Button
          onClick={() => {
            onConfirm();
            onClose();
          }}
          variant="contained"
          color="primary"
        >
          SIM
        </Button>
      </DialogActions>
    </Dialog>
  );
}
