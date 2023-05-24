import './DropdownList.css';

function DropdownList(props) {
	return (
		<div className="select-field">
			<label htmlFor={props.id}>{props.label}</label>
			<select
				onChange={(event) => props.whenChanged(event.target.value)}
				id={props.id}
				required={!!props.required}
				value={props.value}
			>
				<option key="default" disabled={true} value="">
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
