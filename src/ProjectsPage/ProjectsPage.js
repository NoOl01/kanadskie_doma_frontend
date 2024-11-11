import React, {useEffect, useState} from 'react';
import './ProjectsPage.css'
import Project from "./Project";
import Header from "../Components/Other/HeaderComponent/HeaderComponent";
import Arrow from "./projetsImage/Arrow.svg";
function ProjectsPage() {
    const [allProjects, setAllProjects] = useState(null);
    const [openSearch, setOpenSearch] = useState(false);
    const [openFilter, setOpenFilter] = useState([false, false]);

    const toggleFilter = (index) => {
        setOpenFilter((prevOpenFilter) => {
            const newOpenFilter = [...prevOpenFilter];
            newOpenFilter[index] = !newOpenFilter[index];
            return newOpenFilter;
        });
    };


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
                <div className="search_header">
                    <p>Наши проекты</p>
                    <div className="search_header_div">
                        <input id="search_input" className={`search_header_input ${openSearch ? 'opened' : ''}`} type="search" placeholder="Название проекта"/>
                        <button className={`search_btn ${openSearch ? 'opened' : ''}`}
                                onClick={() => {
                                    if(openSearch && document.getElementById('search_input').value !== ""
                                        || document.getElementById('search_input_filter1').value !== ""
                                        || document.getElementById('search_input_filter1').value !== ""){
                                        alert('//TODO')
                                    }else{
                                        setOpenSearch(!openSearch)
                                    }}}/>
                    </div>
                </div>
                <div className={`search_div ${openSearch ? 'opened' : ''}`}>
                    <div className="search_filters">
                        <div className="search_d">
                            <div className="search_filters_div">
                                <input id="search_input_filter1" className={openFilter[0] ? 'opened' : ''} type="number"
                                       placeholder="Кол-во этажей"/>
                                <button className={`search_filters_button ${openFilter[0] ? 'opened' : ''}`}
                                        onClick={() => toggleFilter(0)}>
                                    <img className={`search_filters_img ${openFilter[0] ? 'opened' : ''}`} src={Arrow}
                                         alt=""/></button>
                            </div>
                            <div className={`floors_select_div ${openFilter[0] ? 'opened' : ''}`}>
                                <button onClick={() => {
                                    document.getElementById('search_input_filter1').value = '1';
                                    toggleFilter(0);
                                }}>1 Этаж
                                </button>
                                <button onClick={() => {
                                    document.getElementById('search_input_filter1').value = '2';
                                    toggleFilter(0);
                                }}>2 Этажа
                                </button>
                                <button onClick={() => {
                                    document.getElementById('search_input_filter1').value = '3';
                                    toggleFilter(0);
                                }}>3 Этажа
                                </button>
                            </div>
                        </div>
                        <div className="search_d">
                            <div className="search_filters_div">
                                <input id="search_input_filter2" className={openFilter[1] ? 'opened' : ''} type="number"
                                       placeholder="Кол-во этажей"/>
                                <button className={`search_filters_button ${openFilter[1] ? 'opened' : ''}`}
                                        onClick={() => toggleFilter(1)}>
                                    <img className={`search_filters_img ${openFilter[1] ? 'opened' : ''}`} src={Arrow}
                                         alt=""/></button>
                            </div>
                            <div className={`floors_select_div ${openFilter[1] ? 'opened' : ''}`}>
                                <button onClick={() => {
                                    document.getElementById('search_input_filter2').value = '40';
                                    toggleFilter(1);
                                }}>40 кв.м
                                </button>
                                <button onClick={() => {
                                    document.getElementById('search_input_filter2').value = '80';
                                    toggleFilter(1);
                                }}>80 кв.м
                                </button>
                                <button onClick={() => {
                                    document.getElementById('search_input_filter2').value = '120';
                                    toggleFilter(1);
                                }}>120 кв.м
                                </button>
                            </div>
                        </div>
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