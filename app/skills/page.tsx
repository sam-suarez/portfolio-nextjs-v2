import { SKILLS_QUERY } from '@/graphql/queries/skills'
import { SkillsQuery } from '@/graphql/types/skills'
import client from '@/lib/apolloClient'
import Skills from '@/sections/skills'
import React from 'react'

const fetchSkillsData = async () => {
  const { data } = await client.query<SkillsQuery>({
    query: SKILLS_QUERY,
  })
  return data.skills
}

const SkillsPage = async () => {
  const skillsData = await fetchSkillsData()

  return <Skills data={skillsData} />
}

export default SkillsPage
