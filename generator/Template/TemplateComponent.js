import React from "react";
import "./TemplateStyle.css";

class TemplateComponent extends React.Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div className="hello">
          <h1>{props.TemplateState.hello}</h1>
          <div>
            <button onClick={props.helloBack.bind(this)}>Hello Back!</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TemplateComponent;
