const Users = ( {emps} )=>{
    return(
        <>
            {
                emps.map((emp, index)=>{
                    return(
                        <div key={index}>
                            <h2>{emp.name}</h2>
                            <p>{emp.email}</p>
                            <p>{emp.phone}</p>
                        <hr />
                    </div>
                    )
                })
            }
        </>
    )
}

export default Users;