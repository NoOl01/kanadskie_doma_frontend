import React, {useEffect, useState} from 'react';
import './ProjectsPage.css'
import Project from "./Project";

function ProjectsPage() {
    const [allProjects, setAllProjects] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/getHouses/`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setAllProjects(data)
                console.log(data)
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <div className='projects_root'>
            {
                allProjects !== null &&
                <>
                    {allProjects.data.houses.map(item => <Project house={item}/>)}
                </>
            }
        </div>
    );
}

export default ProjectsPage;
