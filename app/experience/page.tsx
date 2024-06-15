import { EXPERIENCE_QUERY } from '@/graphql/queries/experience'
import { ExperienceQuery } from '@/graphql/types/experience'
import client from '@/lib/apolloClient'
import Experience from '@/sections/experience'
import React from 'react'

const fetchExperienceData = async () => {
  const { data } = await client.query<ExperienceQuery>({
    query: EXPERIENCE_QUERY,
  })
  return data.experience
}

const ExperiencePage = async () => {
  const experienceData = await fetchExperienceData()

  return <Experience data={experienceData} />
}

export default ExperiencePage
