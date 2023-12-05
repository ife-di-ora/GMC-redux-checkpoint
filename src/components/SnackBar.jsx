import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../features/snackBarSlice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const dispatch = useDispatch();
  const { severity, msg, isOpen } = useSelector((state) => state.variants);
  //   console.log(severity, msg, isOpen);
  const handleClose = () => dispatch(close());

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={isOpen} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
