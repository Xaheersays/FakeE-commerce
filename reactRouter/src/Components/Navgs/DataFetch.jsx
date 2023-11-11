function Electronics_Data(){
    const [data,setData] = useState([])
    const url = "https://fakestoreapi.com/products/category/electronics";
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then((data)=>{
            setData(data)
            console.log(data)
        })
        .catch(error=>console.error(error));
    },[])
}