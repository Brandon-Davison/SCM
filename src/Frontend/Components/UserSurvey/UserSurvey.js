import React, {Component} from 'react';
//import scmLogo from '../../Assets/guerillaSCM.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { textAlign } from '@material-ui/system';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';

const axios = require('axios')
//const logo = require('../../Assets/guerillaSCM.png');

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
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
    rating1: {
      width: 200,
      display: 'flex',
      alignItems: 'center',
    },
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
      <div className="UserSurvey">
        <body style={{backgroundColor: "#fffdd0", minHeight: "100vh"}}>

          {/* Survey Question*/}
          <h1>Question: {this.props.question}</h1>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="hover-tooltip"
              value={rating}
              precision={0.5}
              size={"large"}
              IconContainerComponent={IconContainer}
              onChange={(event, newValue) => {
                this.starClick(newValue)
                // props.starClick(newValue)
                // this.props.starClick(newValue)
                console.log("Changed from UserSurvey file")
              }}
            />
          </Box>     
          <h2>Rating from state: {rating}</h2>

          <div style={
            {width: "80%",
            display: "flex",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10%",
            marginRight: "10%"}
          }>
            {/* Survey Answer Box */}
            {/* MaterialUI textbox */}
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
          </div>
          <div> 
            {/* Save Button */}
            <Button variant="contained" style={{marginRight: "5px"}}>Save</Button>
            {/* Submit Button */}
            <Button variant="contained" style={{marginLeft: "5px"}} onClick={() => this.props.handleClose(rating)}>Submit</Button>
          </div>
        </body>
      </div>
    );
  }
}

export default UserSurvey;
