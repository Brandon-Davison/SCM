import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import UserSurvey from '../UserSurvey/UserSurvey';

const axios = require('axios')

let surveyQuestion = 'Error: survey not found';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const survId = props.id;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const [surveyQuestions, setSurveyQuestions] = React.useState("Error: survey not found");
  const [beenChanged, setBeenChanged] = React.useState(false)

  const update = (id) => {
    axios.get('http://localhost:3005/api/embed/' + id).then(response => {
        if (response.data) {
            console.log("survey response contents: " + JSON.stringify(response.data))
            response.data.questions.map(element => {
              setSurveyQuestions(element.prompt)
              setBeenChanged(true)
            })
          }
    })
  }
  update(survId)

  /**
   * Handles closing the website modal after a user submits their feedback or exits.
   * 
   * @param {integer} starCount Ratings 1-5 are saved; A -1 signals exiting the modal.
   * 
   */
  const handleClose = (starCount) => {
    if (starCount > 0 && starCount <= 5) {
      let surveyResult = JSON.stringify(
      {
        answers:
        [
            {
                answerType: "StarRating",
                questionID: 0,
                stars: starCount
            }
        ] 
      }
      )
      var request = new XMLHttpRequest();
      request.open('POST', 'http://localhost:3005/api/response/survey/' + survId, true);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      request.send(surveyResult);
    }
    setOpen(false);
  };

  return (      
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
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <UserSurvey question={surveyQuestions} handleClose={handleClose}/> 
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
