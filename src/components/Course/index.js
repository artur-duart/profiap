import './Course.css';

function Course(props) {
	return (
		<section className='course'>
			<h3>{props.name}</h3>
		</section>
	);
}

export default Course;
