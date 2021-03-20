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

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    flex: 1,
  },
  //   visible: {
  //     display: "flex",
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
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
  small: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
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
    <>
      <div className="userContainer">
        <div className="userInfo">
          <div className={classes.root}>
            <Avatar
              src={props.user.picture.thumbnail}
              className={classes.small}
            />
          </div>

          <div className="user">
            <div className="name">
              {props.user.name.first} {props.user.name.last}
            </div>
            <div className="username">
              Username: {props.user.login.username}
            </div>
            <div className="email">Email:{props.user.email}</div>
          </div>

          <div className="viewUser">
            <VisibilityIcon
              onClick={handleClickOpen}
              className="visibilityIcon"
            />
          </div>
        </div>
      </div>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 100,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <div className="visible">
                <div>
                  <Avatar
                    src={props.user.picture.thumbnail}
                    className={classes.large}
                  />
                </div>
                <div className="visibleName">
                  {props.user.name.first} {props.user.name.last}
                </div>
     
              </div>
              <div className='visibleAdditional'>
                        <div>Street: {props.user.location.street.name}</div>
                        <div>City: {props.user.location.city}</div>
                        <div>State: {props.user.location.state}</div>
                        <div>Postcode: {props.user.location.postcode}</div>
                        <div>Cell: {props.user.cell}</div>
                        <div>Phone: {props.user.phone}</div>
                </div>

            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default User;
