import '../ProjectsPage/ProjectsPage.css'
import Arrow from "../ProjectsPage/projetsImage/Arrow.svg";
import React, {useEffect, useState} from "react";
import Header from "../Components/Other/HeaderComponent/HeaderComponent";
import ReadyHouses from "./ReadyHouses";
import Search from "../ProjectsPage/projetsImage/search.svg";
import MediaQuery from "react-responsive";

function ReadyHousesListPage() {
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

    const getFilterClass = () => {
        if (window.innerWidth <= 900) {
            if (openFilter[0] && openFilter[1]) return 'openFilterAll';
            if (openFilter[1]) return 'openFilter2';
            if (openFilter[0]) return 'openFilter1';
            return openSearch ? 'opened' : '';
        } else {
            return openFilter[1] ? 'openFilter2' :
                openFilter[0] ? 'openFilter1' :
                    openSearch ? 'opened' : '';
        }
    };

    const projectFilter = () => {
        if (allProjects && allProjects.data && allProjects.data.houses) {
            let areaValues = [0, 10000]
            if(filters.filterArea !== null){
                areaValues = filters.filterArea.split('-')
            }
            const filtered = allProjects.data.houses.filter((item) => {
                const matchName = filters.filterName
                    ? item.house_name.toLowerCase().includes(filters.filterName.toLowerCase())
                    : true;
                const matchFloors = filters.filterFloors
                    ? item.floors === Number(filters.filterFloors)
                    : true;
                const matchArea = filters.filterArea
                    ? item.area >= Number(areaValues[0]) && item.area <= Number(areaValues[1])
                    : true;

                return matchName && matchFloors && matchArea;
            });

            setFilteredProjects(filtered);
            console.log(filtered);
        }
    };

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/getAlreadyBuiltHouses/`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => {
                setAllProjects(data)
                console.log(data)
            })
            .catch((error) => console.log(error));
    }, []);

    return(
        <div className="ready_houses_list_page_root">
            <Header/>
            <div className='projects_search'>
                <div className="search_header">
                    <p>Наши дома</p>
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
                               onKeyDown={(e) => {
                                   if(e.key === 'Enter') {
                                       e.preventDefault();
                                       if (openSearch && (filters.filterName !== '' || filters.filterFloors !== '' || filters.filterArea !== '')) {
                                           projectFilter()
                                       } else {
                                           setOpenSearch(!openSearch)
                                       }
                                   }
                               }}/>
                        <div className="search_btn_div">
                            <button
                                className={`search_btn ${openSearch ? 'opened' : ''}`}
                                    onClick={() => {
                                        if (openSearch && (filters.filterName !== '' || filters.filterFloors !== '' || filters.filterArea !== '')) {
                                            projectFilter()
                                        } else {
                                            setOpenSearch(!openSearch)
                                        }
                                    }}>
                                <MediaQuery maxWidth="900px">
                                    {!openSearch ?
                                        <div className="search_btn_media">
                                            Нажмите для поиска
                                            <img src={Search} alt=""/>
                                        </div>
                                        : ''
                                    }
                                </MediaQuery>
                            </button>
                            {((filters.filterFloors !== '' || filters.filterArea !== '' || filters.filterName !== '') || filteredProjects !== null) && (
                                <button className="search_clear_button" onClick={() => {
                                    setFilters({
                                        filterName: '',
                                        filterFloors: '',
                                        filterArea: ''
                                    });
                                    setFilteredProjects(null)
                                }}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className={`search_div ${getFilterClass()}`}>
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
                                       }}
                                       onKeyDown={(e) => {
                                           if (e.key === 'Enter') {
                                               e.preventDefault();
                                               if (openSearch && (filters.filterName !== '' || filters.filterFloors !== '' || filters.filterArea !== '')) {
                                                   projectFilter()
                                               } else {
                                                   setOpenSearch(!openSearch)
                                               }
                                           }
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
                                               filterArea: e.target.value
                                           });
                                       }}
                                       onKeyDown={(e) => {
                                           if (e.key === 'Enter') {
                                               e.preventDefault();
                                               if (openSearch && (filters.filterName !== '' || filters.filterFloors !== '' || filters.filterArea !== '')) {
                                                   projectFilter()
                                               } else {
                                                   setOpenSearch(!openSearch)
                                               }
                                           }
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
                allProjects !== null &&
                <>
                    <div className="projects_list">
                        {filteredProjects !== null ? filteredProjects.map(item => <ReadyHouses house={item}/>) : allProjects.data.houses.map(item => <ReadyHouses house={item}/>)}
                    </div>
                </>
            }
        </div>
    )
}
export default ReadyHousesListPage;