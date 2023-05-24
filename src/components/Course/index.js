import Teacher from '../Teacher';
import './Course.css';

function Course(props) {
	return (
		props.teachers.length > 0 && (
			<section
				className="course"
				style={{ backgroundColor: props.secondaryColor }}
			>
				<h3 style={{ borderColor: props.primaryColor }}>
					{props.name}
				</h3>
				<div className="teachers">
					{props.teachers.map((teacher) => (
						<Teacher
							backgroundColor={props.primaryColor}
							key={teacher.name}
							name={teacher.name}
							subject={teacher.subject}
							image={teacher.image}
						/>
					))}
				</div>
			</section>
		)
	);
}

export default Course;
