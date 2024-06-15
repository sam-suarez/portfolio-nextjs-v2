import client from '@/lib/apolloClient'
import { HERO_QUERY } from '@/graphql/queries/hero'
import { HeroQuery } from '@/graphql/types/hero'
import Hero from '@/sections/hero'

const fetchHeroData = async () => {
  const { data } = await client.query<HeroQuery>({
    query: HERO_QUERY,
  })
  return data.hero
}

const Home = async () => {
  const heroData = await fetchHeroData()

  return <Hero data={heroData} />
}

export default Home
