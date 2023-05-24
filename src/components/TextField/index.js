import './TextField.css';

function TextField(props) {
	const whenTyping = (event) => {
		props.whenChanged(event.target.value);
	};

	return (
		<div className="text-field">
			<label htmlFor={props.id}>{props.label}</label>
			<input
				value={props.value}
				onChange={whenTyping}
				id={props.id}
				type={props.type}
				placeholder={props.placeholder}
				required={!!props.required}
			/>
		</div>
	);
}

export default TextField;
