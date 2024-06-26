import React from "react";
import "../index.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {ReactComponent as Social} from "../assets/Social.svg";
import DialogTitle from '@mui/material/DialogTitle';
import {TransitionProps} from "@mui/material/transitions";
import {Slide} from "@mui/material";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="right" ref={ref} {...props} />;
});

const Footer: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
      <>
          <div>
              <button
                  className="SocialButton"
                  onClick={handleClickOpen}
              >
                  <Social className="SocialIcon"/>
              </button>
              <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
              >
                  <DialogTitle id="responsive-dialog-title">
                      {"Contact With Me"}
                  </DialogTitle>
                  <DialogContent>
                      <footer >
                      <div className="text-center marginer mb-2">
                          <a href="https://www.linkedin.com/in/ranjita-gouri-16a245238/"><LinkedInIcon sx={{fontSize:35}}/></a>
                          <a href="https://github.com/Ranjitagouri"><GitHubIcon sx={{fontSize:35}}/></a>
                      </div>
                      </footer>
                  </DialogContent>
                  <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                          Agree
                      </Button>
                  </DialogActions>
              </Dialog>
          </div>
      </>
  );
};

export default Footer;
