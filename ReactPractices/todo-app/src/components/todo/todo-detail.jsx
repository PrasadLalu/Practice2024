import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";
import PropTypes from "prop-types";

const TodoDetail = ({ todoDetail, openDialog, setOpenDialog, setTodoDetail }) => {
  console.log(openDialog);
  return (
    <Fragment>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>{todoDetail?.todo}</DialogTitle>
        <DialogActions>
            <Button onClick={() => {
                setOpenDialog(false)
                setTodoDetail(null)
          }}>Close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

TodoDetail.propTypes = {
  todoDetail: PropTypes.object,
  openDialog: PropTypes.bool,
  setOpenDialog: PropTypes.func,
  setTodoDetail: PropTypes.func,
};

export default TodoDetail;
