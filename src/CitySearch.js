import React,{Fragment,useState} from 'react';
import CitySearchItem from './CitySearchItem'
function CitySearch() {
    
    const [CityName, setCityName] = useState([]);
    const [list, setList] = useState([]);

    const getZipFromAPI = async () =>{
        const response = await fetch('http://ctp-zip-api.herokuapp.com/city/'+ CityName)
        const data = await response.json()
        return data
    }

    const onChange = (e)=>
    {
        setCityName(e.target.value)
        getZipFromAPI().then(data => setList(data)).catch((err) => console.error(err))
        console.log(list)

    }

    return(
        <Fragment>
            <h1 className="display-4 text-center p-3 mb-2 bg-dark text-white">City Search</h1>
            <input className="form-control " type="text" onChange={onChange}></input>
            <ul className="list-group">
                {
                    list.map((item,index) =>
                    {
                        return <CitySearchItem
                        key = {item+index}
                        content = {item}
                        />
                    })
                }
            </ul>
        </Fragment>
    )
}

export default CitySearch;