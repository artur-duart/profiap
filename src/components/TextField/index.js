import './TextField.css';

function TextField(props) {
	return (
		<div className="text-field">
			<label htmlFor={props.id}>{props.label}</label>
			<input
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				required={props.required}
			/>
		</div>
	);
}

export default TextField;
