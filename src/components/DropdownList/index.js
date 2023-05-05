import './DropdownList.css';

function DropdownList(props) {
	return (
		<div className="select-field">
			<label htmlFor={props.id}>{props.label}</label>
			<select id={props.id} required={props.required}>
				<option key="default" selected="selected" disabled="true">
					-- Selecione o Curso --
				</option>

				{props.items.map((item) => {
					return <option key={item}>{item}</option>;
				})}
			</select>
		</div>
	);
}

export default DropdownList;
