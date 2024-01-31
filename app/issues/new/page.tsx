'use client'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";



import { Button, TextField } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
           <TextField.Input placeholder='Titel' /> 
        </TextField.Root>
        <SimpleMDE placeholder='Beskriv ditt arande' />
        <Button>Skapa Nytt Arande</Button>
    </div>
  )
}

export default NewIssuePage