import React, {Component} from 'react';
//import scmLogo from '../../Assets/guerillaSCM.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StarRatingComponent from 'react-star-rating-component';
import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';

const axios = require('axios')
//const logo = require('../../Assets/guerillaSCM.png');


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

function foo() {
  console.log("WSKDJNKDSJNCSS")

  //this.props.handleClose
}

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

  render() {
    const { rating } = this.state;

    return (
      <div className="UserSurvey">
        <body style={{backgroundColor: "#fffdd0", minHeight: "100vh"}}>

            


          {/* Survey Question*/}
          <h1>Question: {this.props.question}</h1>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />
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
