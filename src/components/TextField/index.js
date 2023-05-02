import './TextField.css';

function TextField() {
	return (
		<div className="text-field">
			<label htmlFor="">Nome</label>
			<input type="text" placeholder="Digite o seu nome" />
		</div>
	);
}

export default TextField;
