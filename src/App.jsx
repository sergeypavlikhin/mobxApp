import React from 'react'
import ReactDOM from 'react-dom'
import mobx from 'mobx'
import mobx_react from 'mobx-react'

@observer
class App extends React.Component {

    state = {
      names: []
    };

    constructor(props){
        super(props);
        this.joinNames  = this.joinNames.bind(this);
        this.addName    = this.addName.bind(this);

    }

    addName(){
        let names = this.state.names;
        names.push("newName");
        this.setState({names});
    }

    render(){
        return (
            <div>
                <h1>
                    Hello me {this.joinNames()}
                </h1>
                <button onClick={this.addName}>
                    NewName
                </button>
            </div>
        );
    }
    joinNames(){
        return this.state.names.join(" | ");
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));