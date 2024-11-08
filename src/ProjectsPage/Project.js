function Project({house}) {
    return (
        <div>
            <p>{house.name}</p>
            <p>{house.house_code}</p>
            <p>{house.area}</p>
            <img src={house.images} alt=""/>
        </div>
    )
}

export default Project