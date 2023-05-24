import './Teacher.css';

function Teacher({ name, image, subject, backgroundColor }) {
	return (
		<div className="teacher">
			<div className="header" style={{ backgroundColor: backgroundColor }}>
				<img src={image} alt={`Foto de ${name}`} />
			</div>

			<div className="footerTeacher">
				<h4>{name}</h4>
				<h5>{subject}</h5>
			</div>
		</div>
	);
}

export default Teacher;
