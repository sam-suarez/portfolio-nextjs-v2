import { SkillsQuery } from '@/graphql/generated'
import { SKILLS_QUERY } from '@/graphql/queries/skills'
import client from '@/lib/apolloClient'
import Skills from '@/sections/skills'
import React from 'react'

const fetchServerData = async () => {
  const { data } = await client.query<SkillsQuery>({
    query: SKILLS_QUERY,
  })
  return data
}

const SkillsPage = async () => {
  const data = await fetchServerData()

  return <Skills data={data.skills} />
}

export default SkillsPage
