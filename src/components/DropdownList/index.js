import './DropdownList.css';

function DropdownList(props) {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			<select id={props.id}>
				{props.items.map((item) => {
					return <option>{item}</option>;
				})}
			</select>
		</div>
	);
}

export default DropdownList;
