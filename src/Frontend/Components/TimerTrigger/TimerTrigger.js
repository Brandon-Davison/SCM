import WebsiteModal from '../WebsiteModal/WebsiteModal';
import './'

const React = require('react')
const ms = require('pretty-ms')

class TimerTrigger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, scrollPos: 0, avgPos: 0.0 };
  }

  tick() {
    this.setState(prevState => ({
    seconds: prevState.seconds + 1,
    avgPos: prevState.avgPos + window.pageYOffset
    }));
  }

  componentDidMount() {
   this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleScroll() {
    var winHeight = window.innerHeight;
     
    // Annoying to compute doc height due to browser inconsistency
    var body = document.body;
    var html = document.documentElement;
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
      html.clientHeight, html.scrollHeight, html.offsetHeight);
     
    var value = document.body.scrollTop;

    console.log("docHeight: " + docHeight)
    console.log("scrollPos: " + window.pageYOffset)
    console.log("AvgPos: " + this.state.avgPos / this.state.seconds)

     console.log("")
  }

  render() {
    let survey = (this.state.seconds >= this.props.timerLength && (this.state.avgPos / this.state.seconds) == 0) ? <WebsiteModal id={this.props.id}></WebsiteModal> : null

    return (
      <div>
       Seconds: {this.state.seconds}
      {this.handleScroll()}
      {survey}
      </div>
    );
  }
}

export default TimerTrigger;