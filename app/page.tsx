import { HomepageQuery } from '@/graphql/generated'
import { HOMEPAGE_QUERY } from '@/graphql/queries/pages/homepage'
import client from '@/lib/apolloClient'
import Hero from '@/sections/hero'

const fetchServerData = async () => {
  const { data } = await client.query<HomepageQuery>({
    query: HOMEPAGE_QUERY,
  })

  const sectionData = data

  return sectionData
}

const Home = async () => {
  const data = await fetchServerData()

  return <Hero data={data} />
}

export default Home
