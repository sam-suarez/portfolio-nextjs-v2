export interface FormData {
  name: string
  email: string
  message: string
  hiddenMessage?: string
}

export type ContactProps = {
  isOpen: boolean
  handleClose: () => void
}
