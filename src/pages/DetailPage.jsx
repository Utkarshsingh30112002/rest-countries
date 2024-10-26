import { useNavigate } from 'react-router-dom';
import useFetch from '../components/hooks/useFetch'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/detailPage/BackButton';
import Card from '../components/detailPage/Card';
import { useState } from 'react';

function DetailPage({params}) {
    const navigate=useNavigate();
    const {name}=useParams();
    const [loading,setLoading]=useState(true);
    const url=`/api/name/${name}?fullText=true`;
    const country=useFetch(url,setLoading)
    function clickedBack(e){
        navigate('/')
    }

  return (<>
    <BackButton clickedBack={clickedBack}/>
    {loading?<Spinner isLoading={loading}/>
    :<Card country={country}/>}
    </>
  )
}

export default DetailPage