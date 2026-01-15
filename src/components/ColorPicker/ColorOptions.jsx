import "./Coloroptions.css"
import css from './ColorPicker.module.css'
export const ColorOptions = ({ options }) => {   
	return (
		<div>
			<h2>Color Picker</h2>
            <div className="wrapper">
                {options.map(option => {
                return <div className={css.label}>
                    <span style={{color: option.color, fontSize: '24px'}}>{ option.label }</span>
			</div>
            })}
            </div>
		</div>
	)
}
