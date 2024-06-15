import { Image } from './image'
export interface SkillsQuery {
  skills: Skills
}

export interface Skills {
  title: string
  subtitle: string
  skillsCollection: {
    items: SkillItem[]
  }
}

export interface SkillItem {
  title: string
  image: Image
}
