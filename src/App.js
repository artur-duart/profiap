import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Course from './components/Course';
import Footer from './components/Footer';

function App() {
	const courses = [
		{
			name: 'Análise e Desenvolvimento de Sistemas',
			primaryColor: '#57C278',
			secondaryColor: '#D9F7E9',
		},
		{
			name: 'Sistemas para Internet',
			primaryColor: '#82CFFA',
			secondaryColor: '#E8F8FF',
		},
		{
			name: 'Data Science',
			primaryColor: '#A6D157',
			secondaryColor: '#F0F8E2',
		},
		{
			name: 'Defesa Cibernética',
			primaryColor: '#E06B69',
			secondaryColor: '#FDE7E8',
		},
		{
			name: 'Produção Multimídia',
			primaryColor: '#DB6EBF',
			secondaryColor: '#FAE9F5',
		},
		{
			name: 'Jogos Digitais',
			primaryColor: '#FFBA05',
			secondaryColor: '#FFF5D9',
		},
		{
			name: 'Gestão da Tecnologia da Informação',
			primaryColor: '#FF8A29',
			secondaryColor: '#FFEEDF',
		},
	];

	const [teachers, setTeachers] = useState([]);

	const whenAddNewTeacher = (teacher) => {
		setTeachers([...teachers, teacher]);
	};

	return (
		<div className="App">
			<Banner />
			<Form
				courses={courses.map((course) => course.name)}
				whenAddNewTeacher={(teacher) => whenAddNewTeacher(teacher)}
			/>

			{courses.map((course) => (
				<Course
					key={course.name}
					name={course.name}
					primaryColor={course.primaryColor}
					secondaryColor={course.secondaryColor}
					teachers={teachers.filter(teacher => teacher.course === course.name)}
				/>
			))}

			<Footer />
		</div>
	);
}

export default App;
