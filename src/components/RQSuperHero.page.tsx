import {useQuery} from '@tanstack/react-query';
import axios from 'axios'

function RQSuperHeroPage() {
    const {isLoading, data,isError,error} =useQuery({
        queryKey:['rq-super-heros'],
        queryFn:()=>{
            return axios.get("http://localhost:4000/superheroes")
            },
        }
       )
   if(isError) return <h2>{error.message}</h2>
   if(isLoading) return <h2>..Loading</h2>
   console.log(data)
  return(
   <>
   <h1>RQ Super Heros Page</h1>
   {data.data.map((hero)=>{
       return <div key={hero.id} >{hero.name}</div>
       })}
   </>
   )
}

export default RQSuperHeroPage;
