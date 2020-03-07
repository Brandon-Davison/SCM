import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { textAlign } from '@material-ui/system';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

const axios = require('axios')

const labels = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function IconContainer(props) {
  const { value, ...other } = props;
  return (
    <Tooltip title={labels[value] || ''}>
      <span {...other} />
    </Tooltip>
  );
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
    UserSurvey: {
      width: 200,
      height: 250,
      display: 'flex',
      alignItems: 'center',
    },
    centerIT: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    }
  });

class UserSurvey extends Component {  

  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  starClick = (value) => {
    this.setState({rating: value});
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <body style={{backgroundColor: "white", minHeight: "25vh"}}>

          <h1>Question: {this.props.question}</h1>
          <Box component="fieldset" mb={3} borderColor="transparent" className = "centerIT">
            <div className="centerIT">
              <Rating
              className="centerIT"
              name="hover-tooltip"
              value={rating}
              size={"large"}
              alignItems="center"
              IconContainerComponent={IconContainer}
              onChange={(event, newValue) => {
                this.starClick(newValue)
              }}
            />
            </div>
         
          </Box>     
          <TextField
            id="outlined-textarea"
            label="Feedback"
            placeholder="Leave some feedback..."  
            multiline
            margin="normal"
            fullWidth="true"
            variant="outlined"
            rows="4"
          /> 
          <div>
            {/* save and submmit buttons */}
            <Button variant="contained" style={{marginRight: "5px"}} onClick={() => this.props.handleClose(-1)}>Close</Button>
            <Button variant="contained" style={{marginLeft: "5px"}} onClick={() => this.props.handleClose(rating)}>Submit</Button>
          </div>
        </body>
      </div>
    );
  }
}

export default UserSurvey;
