import React, {useEffect, useState} from 'react';
import './ProjectsPage.css'
import Project from "./Project";
import Header from "../Components/Other/HeaderComponent/HeaderComponent";
import Arrow from "./projetsImage/Arrow.svg";

function ProjectsPage() {
    const [filters, setFilters] = useState({
        filterName: '',
        filterFloors: '',
        filterArea: ''
    });

    const [allProjects, setAllProjects] = useState(null);
    const [openSearch, setOpenSearch] = useState(false);
    const [openFilter, setOpenFilter] = useState([false, false]);
    const [filteredProjects, setFilteredProjects] = useState(null);

    const toggleFilter = (index) => {
        setOpenFilter((prevOpenFilter) => {
            const newOpenFilter = [...prevOpenFilter];
            newOpenFilter[index] = !newOpenFilter[index];
            return newOpenFilter;
        });
    };

    const projectFilter = () =>{
        allProjects.data.houses.filter(function (item) {
            if (filter.filterName !== null && item.name.contain(filter.filterName)){
                setFilteredProjects(item)

            }
        })
    }

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
                        <input id="search_input"
                               className={`search_header_input ${openSearch ? 'opened' : ''}`}
                               type="search" placeholder="Название проекта"
                               value={filters.filterName}
                               onChange={
                                   (e) => {
                                       setFilters({
                                           ...filters,
                                           filterName: e.target.value
                                       });
                                   }
                               }
                        />
                        <div className="search_btn_div">
                            <button className={`search_btn ${openSearch ? 'opened' : ''}`}
                                    onClick={() => {
                                        if (openSearch && (filters.filterName !== null || filters.filterFloors !== null || filters.filterArea !== null)
                                        ) {
                                            console.log(filters)
                                        } else {
                                            setOpenSearch(!openSearch)
                                        }
                                    }}/>
                            {(filters.filterFloors !== '' || filters.filterArea !== '' || filters.filterName !== '') && (
                                <button className="search_clear_button"
                                        onClick={() => {
                                            setFilters({
                                                filterName: null,
                                                filterFloors: null,
                                                filterArea: null
                                            });
                                        }}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className={`search_div ${
                    openFilter[1] ? 'openFilter2'
                        : openFilter[0] ? 'openFilter1'
                            : openSearch ? 'opened'
                                : ''
                }`}>
                    <div className="search_filters">
                        <div className="search_d">
                            <div className="search_filters_div">
                                <input id="search_input_filter1"
                                       className={openFilter[0] ? 'opened' : ''} type="number"
                                       placeholder="Кол-во этажей"
                                       value={filters.filterFloors}
                                       onChange={(e) => {
                                           setFilters({
                                               ...filters,
                                               filterFloors: e.target.value
                                           });
                                       }}/>
                                <button className={`search_filters_button ${openFilter[0] ? 'opened' : ''}`}
                                        onClick={() => toggleFilter(0)}>
                                    <img className={`search_filters_img ${openFilter[0] ? 'opened' : ''}`} src={Arrow}
                                         alt=""/></button>
                            </div>
                            <div className={`floors_select_div ${openFilter[0] ? 'opened' : ''}`}>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterFloors: 1
                                    })
                                    toggleFilter(0);
                                }}>1 Этаж
                                </button>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterFloors: 2
                                    })
                                    toggleFilter(0);
                                }}>2 Этажа
                                </button>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterFloors: 3
                                    })
                                    toggleFilter(0);
                                }}>3 Этажа
                                </button>
                            </div>
                        </div>
                        <div className="search_d">
                            <div className="search_filters_div">
                                <input id="search_input_filter2"
                                       className={openFilter[1] ? 'opened' : ''} type="text"
                                       value={filters.filterArea}
                                       placeholder="Общая площадь"
                                       onChange={(e) => {
                                           setFilters({
                                               ...filters,
                                               filterFloors: e.target.value
                                           });
                                       }}/>
                                <button className={`search_filters_button ${openFilter[1] ? 'opened' : ''}`}
                                        onClick={() => toggleFilter(1)}>
                                    <img className={`search_filters_img ${openFilter[1] ? 'opened' : ''}`} src={Arrow}
                                         alt=""/></button>
                            </div>
                            <div className={`floors_select_div ${openFilter[1] ? 'opened' : ''}`}>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterArea: "18-50"
                                    })
                                    toggleFilter(1);
                                }}>18-50 кв.м
                                </button>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterArea: "50-100"
                                    })
                                    toggleFilter(1);
                                }}>50-100 кв.м
                                </button>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterArea: "100-170"
                                    })
                                    toggleFilter(1);
                                }}>100-170 кв.м
                                </button>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterArea: "170-250"
                                    })
                                    toggleFilter(1);
                                }}>170-250 кв.м
                                </button>
                                <button onClick={() => {
                                    setFilters({
                                        ...filters,
                                        filterArea: "250-300"
                                    })
                                    toggleFilter(1);
                                }}>250-300 кв.м
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                // filteredProjects !== null &&
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