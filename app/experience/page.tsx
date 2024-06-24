import { EXPERIENCE_QUERY } from '@/graphql/queries/experience'
import { ExperienceQuery } from '@/graphql/types/experience'
import client from '@/lib/apolloClient'
import Experience from '@/sections/experience'
import React from 'react'

const fetchServerData = async () => {
  const { data } = await client.query<ExperienceQuery>({
    query: EXPERIENCE_QUERY,
  })
  return data
}

const ExperiencePage = async () => {
  const data = await fetchServerData()

  return <Experience data={data.experience} />
}

export default ExperiencePage
