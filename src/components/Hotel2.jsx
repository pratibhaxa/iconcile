import { Component } from "react";

class Hotel2 extends Component {
    // displayProps() {
    //     console.log(this.props);
    // }
    render(){
        return (
            <div>
                hiii
                This is the ID: {this.props.match.params.id}
                {/* <button onClick={this.displayProps}>Click to check the  Props</button> */}
            </div>
        )
    }
    
}

export default Hotel2;