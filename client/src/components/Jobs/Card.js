import React from "react";
import "./Card.css";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "@material-ui/core/Button";
import Jobinfo from "../Jobs/Jobinfo";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
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
// Main Function

const Card = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="job__cards">
      {/* Job Card Top */}

      <div className="card__top">
        <p>{props.imgsrc}</p>
        <p>
          <BookmarkBorderIcon />
        </p>
      </div>

      {/* Job Card Bottom */}

      <div className="card__bottom">
        <p>{props.title}</p>
        <p> {props.sname} </p>

        <div>
          <Button
            href={props.link}
            target="_blank"
            variant="outlined"
            type="button"
            onClick={handleOpen}
            color="primary"
          >
            Read More
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h1>Hello wowrdk</h1>
              </div>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="card__info"><p>{props.comname}</p></div>; */
}
