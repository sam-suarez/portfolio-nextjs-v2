import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Replace with your Formspree endpoint
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT

  if (!formspreeEndpoint) {
    return NextResponse.json({ error: 'Formspree endpoint is not defined' }, { status: 500 })
  }

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
      const data = await response.json()
      return NextResponse.json({ message: 'Message sent successfully', data }, { status: 200 })
    } else {
      const errorText = await response.text()
      return NextResponse.json({ error: errorText }, { status: response.status })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
