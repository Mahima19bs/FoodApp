const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(false);
   useEffect(()=>{
    window.addEventListener((online)=>{
        setOnlineStatus(true);
    })
    window.addEventListener((offline)=>{
        setOnlineStatus(false);
    })
   },[])
}
export default useOnlineStatus;