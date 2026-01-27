import React from "react";
import "./Coloroptions.css";

export class ColorOptions extends React.Component {   
    state = {
      colorIdx: null
    }      
   	
    render() {
        return (
		<div>
			<h2>Color Picker</h2>
            <div className="wrapper">
                {this.props.options.map((option, index) => {
                    return <div
                        key={option.label}
                        onClick={() => {this.setState({colorIdx: index})}} className="label">
                    <span
                        style={{ color: option.color, fontSize: '24px' }}>{option.label}
                    </span>
			</div>
            })}
            </div>
		</div>
	)
    }
}
