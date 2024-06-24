export interface SkillsEntry {
  __typename: 'SkillsEntry'
  title: string
  image: {
    __typename: 'Asset'
    url: string
    height: number
    width: number
  }
}

export interface SkillsQuery {
  skills: {
    __typename: 'Skills'
    title: string
    subtitle: string
    skillsCollection: {
      __typename: 'ExperienceEntryCollection'
      items: SkillsEntry[]
    }
  }
}
