import Child from "./Child";

const Parent = ()=>{
    return(
        <Child key1={"ReactJS 18.X"}
               key2={100}
               key3={true}
               key4={[10,20,30]}
               key5={{"k1":"ReactJS","k2":"NodeJS","k3":"MongoDB"}}
               key6={ [{"p_id":111, "p_name":"shirt_1", "p_cost":1000},
                       {"p_id":222, "p_name":"shirt_2", "p_cost":2000},
                       {"p_id":333, "p_name":"shirt_3", "p_cost":3000}, 
                       {"p_id":444, "p_name":"shirt_4", "p_cost":4000}, 
                       {"p_id":555, "p_name":"shirt_5", "p_cost":5000}] }>
                        
                       </Child>
    )
}

export default Parent;