import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome!</Preview>
      <Tailwind>
        <Body className='bg-gray-100'>
          <Container>
            <Text className='font-bold text-3xl'>Welcome! {name}</Text>
            <Link href='https://react-email.com'>Come on !</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  backgroundColor: '#f5f5f5',
}

const hedading: CSSProperties = {
  backgroundColor: '#f5f5f5',
}



export default WelcomeTemplate