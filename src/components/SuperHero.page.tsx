import { useState, useEffect } from 'react';
import axios from 'axios';

type Hero = {
  id: number;
  name: string;
};

function SuperHeroPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Hero[]>([]);

  useEffect(() => {
    axios.get<Hero[]>('http://localhost:4000/superheroes').then(res => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>...Loading</h2>;
  }

  return (
    <>
      <h2>Super Heros page</h2>
      {data.map(hero => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
}

export default SuperHeroPage;
