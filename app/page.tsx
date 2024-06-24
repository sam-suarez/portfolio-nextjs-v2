import { HERO_QUERY } from '@/graphql/queries/hero'
import { HeroQuery } from '@/graphql/types/hero'
import client from '@/lib/apolloClient'
import Hero from '@/sections/hero'

const fetchServerData = async () => {
  const { data } = await client.query<HeroQuery>({
    query: HERO_QUERY,
  })
  return data
}

const Home = async () => {
  const data = await fetchServerData()

  return <Hero data={data.hero} />
}

export default Home
