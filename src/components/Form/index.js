import TextField from '../TextField';
import './Form.css';

function Form() {
	return (
		<section className="form">
			<form>
				<h2> Preencha os dados para criar o card do professor. </h2>
				<TextField
					label="Nome"
					id="input-name"
					type="text"
					placeholder="Digite o seu nome..."
				/>
				<TextField
					label="Disciplina"
					id="input-subject"
					type="text"
					placeholder="Digite a sua disciplina..."
				/>
				<TextField
					label="Imagem"
					id="input-image"
					type="text"
					placeholder="Informe o endereço da imagem..."
				/>
				<TextField label="Curso" id="input-course" type="text" />
			</form>
		</section>
	);
}

export default Form;
