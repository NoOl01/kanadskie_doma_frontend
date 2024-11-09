import React, {useEffect, useState} from 'react';
import './ProjectsPage.css'
import Project from "./Project";
import Header from "../Components/Other/HeaderComponent/HeaderComponent";
import aroww from  "./projetsImage/arowdown.png"
import searcher from "./projetsImage/searcerssss.png";
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
            <Header/>
            <div className='projects_search'>
                <div className="search_top">
                    <h1>Наши проекты</h1>

                        <textarea name="" id="" placeholder="Название проекта"></textarea>

                </div>
                <div className="search_bot">
                    <div className="text_but">
                        <textarea name="" id="" placeholder="Площадь"></textarea>
                        <button><img src={aroww} alt=""/></button>
                    </div>
                    <div  className="text_but">
                        <textarea name="" id="" placeholder="Кол-во этажей"></textarea>
                        <button><img src={aroww} alt=""/></button>
                    </div>
                </div>
            </div>
            {
            allProjects !== null &&
                <>
                    <div className="projects_list">
                        {allProjects.data.houses.map(item => <Project house={item}/>)}
                    </div>
                </>
            }
        </div>
    );
}

export default ProjectsPage;
