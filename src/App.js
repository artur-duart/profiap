import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Course from './components/Course';

function App() {
	const [collaborators, setCollaborators] = useState([]);

	const whenAddNewCollaborator = (collaborator) => {
		console.log(collaborator);
		setCollaborators([...collaborators, collaborator]);
	};

	return (
		<div className="App">
			<Banner />
			<Form
				whenAddNewCollaborator={(collaborator) =>
					whenAddNewCollaborator(collaborator)
				}
			/>
			<Course name="Análise e Desenvolvimento de Sistemas" />
			<Course name="Sistemas para Internet" />
			<Course name="Data Science" />
			<Course name="Defesa Cibernética" />
			<Course name="Produção Multimídia" />
			<Course name="Jogos Digitais" />
			<Course name="Gestão da Tecnologia da Informação" />
		</div>
	);
}

export default App;
