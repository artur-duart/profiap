import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

function Form(props) {
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [image, setImage] = useState('');
	const [course, setCourse] = useState('');

	const onSave = (event) => {
		event.preventDefault();
		props.whenAddNewTeacher({
			name,
			subject,
			image,
			course,
		});
		setName('');
		setSubject('');
		setImage('');
		setCourse('');
	};

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
					value={name}
					whenChanged={(value) => setName(value)}
				/>

				<TextField
					label="Disciplina"
					id="input-subject"
					type="text"
					placeholder="Digite a sua disciplina..."
					required="true"
					value={subject}
					whenChanged={(value) => setSubject(value)}
				/>

				<TextField
					label="Imagem"
					id="input-image"
					type="text"
					placeholder="Informe o endereço da imagem..."
					value={image}
					whenChanged={(value) => setImage(value)}
				/>

				<DropdownList
					id="select-course"
					label="Curso"
					items={props.courses}
					required="true"
					value={course}
					whenChanged={(value) => setCourse(value)}
				/>

				<Button text="Criar Card" />
			</form>
		</section>
	);
}

export default Form;
