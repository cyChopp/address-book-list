import React, { useState } from "react";
import "./User.scss";

import VisibilityIcon from "@material-ui/icons/Visibility";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { makeStyles, withStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Avatar } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  small:{
    width: theme.spacing(5),
    height: theme.spacing(5),
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const User = (props) => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="userInfo">
      <div>
      <div className={classes.root}>
          <Avatar
            src={props.user.picture.thumbnail}
            className={classes.small}
          />
        </div>
        {props.user.name.first} {props.user.name.last}
      </div>
      <VisibilityIcon onClick={handleClickOpen} className="visibilityIcon" />
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className={classes.root}>
          <Avatar
            src={props.user.picture.thumbnail}
            className={classes.large}
          />
        </div>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.user.name.first} {props.user.name.last}
        </DialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>
          Country: {props.user.location.country}
          Nationality: {props.user.nat}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default User;
