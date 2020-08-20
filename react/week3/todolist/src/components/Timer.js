  import React, {Component} from 'react'
  
  class Timer extends Component {
        constructor (props) {
            super(props)
            this.state = {
                second:0, 
                minoute: 0,
                hour: 0
            };

   this.componentDidMount = this.componentDidMount.bind(this)
   this.componentWillUnmount = this.componentWillUnmount.bind(this)
 }

      // timer count
  componentDidMount(){

        this.getDate = setInterval(()=>{
            let second = this.state.second +1;
            let minoute = this.state.minoute;
            let hour = this.state.hour;
                if (second ===61){
                second =   1;
                minoute = minoute +1;
                } 
                if (minoute ===61){
                    minoute =1 ; 
                    hour = hour +1;
                    }

        this.setState({
            second : second,
            minoute: minoute,
            hour: hour
        })

        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.getDate);
    } ; 

render(){
    const {second, minoute, hour} = this.state
    return <p> Your time in this site: {hour}:{minoute}:{second}</p>
    }
  }


  export default Timer;
