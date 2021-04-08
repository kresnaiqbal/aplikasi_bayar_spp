import axios from "axios";

const { Component } = require("react");

class LandingPage extends Component{

    componentDidMount(){
        axios.post('/api/login')
            .then(response =>{
                console.log(response);
            });
    }

    render(){
        return(
            <h1>AKU ADALAH LANDING PAGE</h1>
        );
    }

}


export default LandingPage;