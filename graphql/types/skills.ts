import { Image } from './image'

export interface SkillsQuery {
  skills: {
    title: string
    subtitle: string
    skillsCollection: {
      items: SkillItem[]
    }
  }
}

export interface SkillItem {
  title: string
  image: Image
}
