import {useQuery} from '@tanstack/react-query';
import axios from 'axios'

function RQSuperHeroPage() {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ['rq-super-heros'],
    queryFn: () => {
      return axios.get('http://localhost:4000/superheroes')
    },
    staleTime: 1000 * 60 * 5, // 5 minutes fresh
    gcTime: 1000 * 60 * 10,   // keep cache for 10 minutes
  })
     if(isFetching) return <h2>{error.message}</h2>
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
