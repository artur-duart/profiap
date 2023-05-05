import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

function Form() {
	const courses = [
		'Análise e Desenvolvimento de Sistemas',
		'Sistemas para Internet',
		'Data Science',
		'Defesa Cibernética',
		'Produção Multimídia',
		'Jogos Digitais',
		'Gestão da Tecnologia da Informação',
	];

	const onSave = (event) => {
		event.preventDefault();
		console.log('Form sent');
	}

	return (
		<section className="form">
			<form onSubmit={onSave}>
				<h2> Preencha os dados para criar o card do professor. </h2>

				<TextField
					label="Nome"
					id="input-name"
					type="text"
					placeholder="Digite o seu nome..."
					required="true"
				/>

				<TextField
					label="Disciplina"
					id="input-subject"
					type="text"
					placeholder="Digite a sua disciplina..."
					required="true"
				/>

				<TextField
					label="Imagem"
					id="input-image"
					type="text"
					placeholder="Informe o endereço da imagem..."
				/>

				<DropdownList
					id="select-course"
					label="Curso"
					items={courses}
					required="true"
				/>

				<Button text="Criar Card" />
			</form>
		</section>
	);
}

export default Form;
