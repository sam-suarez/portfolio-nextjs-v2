import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Replace with your Formspree endpoint
    const formspreeEndpoint = 'https://formspree.io/f/mayrgrgd'

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      if (response.ok) {
        return res.status(200).json({ message: 'Message sent successfully' })
      } else {
        return res.status(500).json({ error: 'Failed to send message' })
      }
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send message' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
