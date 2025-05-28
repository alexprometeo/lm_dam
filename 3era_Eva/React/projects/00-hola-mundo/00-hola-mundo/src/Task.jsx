function Task({task, status, owner}) {
    return (
        <>
            <div>
                <h3>{task}</h3>
                <p>Estado: {status} </p>
                <p>Responsable: {owner}</p>
            </div>        
        </>
    )
}

export default Task