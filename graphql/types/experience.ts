import { Image } from './image'

export interface ExperienceQuery {
  experience: Experience
}

export interface Experience {
  title: string
  subtitle: string
  experiencesCollection: ExperiencesCollection
}

export interface ExperiencesCollection {
  items: ExperienceItem[]
}

export interface ExperienceItem {
  image: Image
  position: string
  company: string
  startDate: string 
  endDate: string | null 
  overview: {
    json: any
  }
  responsibilities: string[]
}
