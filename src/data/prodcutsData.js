
export const fetchData = async function getResponse({dataUrl,setError,setLoading,loading,error}) {
    setLoading(true);
    try{
        dataUrl = 'https://fakestoreapi.com/'+dataUrl;
        const response = await fetch(
            dataUrl
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        setError('can not load data from API')
    }finally{
        setLoading(false)
    }

}