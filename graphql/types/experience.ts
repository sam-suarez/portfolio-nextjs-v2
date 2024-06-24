export interface ExperienceEntry {
  __typename: 'ExperienceEntry'
  image: {
    __typename: 'Asset'
    url: string
  }
  position: string
  company: string
  startDate: string
  endDate: string
  overview: {
    __typename: 'RichText'
    json: any
  }
  responsibilities: string[]
}

export interface ExperienceQuery {
  experience: {
    __typename: 'Experience'
    title: string
    subtitle: string
    experiencesCollection: {
      __typename: 'ExperienceEntryCollection'
      items: ExperienceEntry[]
    }
  }
}
