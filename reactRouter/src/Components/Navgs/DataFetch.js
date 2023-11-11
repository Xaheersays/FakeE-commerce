
export async function FetchData(url){
    fetch(url).then(res=>res.json()).then((data)=>{
        return data;
    })
    .catch(error=>console.error(error));
    return []
}


