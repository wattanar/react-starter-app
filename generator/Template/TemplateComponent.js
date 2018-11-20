import React from "react";
import "./TemplateStyle.css";

class TemplateComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="hello">
          <h1>{this.props.TemplateState.hello}</h1>
          <div>
            <button onClick={this.props.helloBack.bind(this)}>
              Hello Back!
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TemplateComponent;
