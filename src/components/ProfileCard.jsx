 function ProfileCard({name, age, goal, skills}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Goal: {goal}</p>
            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );

}

export default ProfileCard;