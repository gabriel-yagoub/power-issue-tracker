'use client'

import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
           <TextField.Input placeholder='Titel' /> 
        </TextField.Root>
        <TextArea placeholder='Beskriv ditt arande' />
        <Button>Skapa Nytt Arande</Button>
    </div>
  )
}

export default NewIssuePage