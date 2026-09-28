import ProfileCard from '../components/ProfileCard';

function Day16() {
    return (
        <div>
            <ProfileCard name="Hassan" age={27} goal="Build a game" skills={["JS", "React"]} />
            <ProfileCard name="Sara" age={18} goal="Get good At React" skills={["Gaming", "Reading"]}/>
        </div>
    );
}

export default Day16;