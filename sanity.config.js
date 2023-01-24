import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: '28f5u0iq',
  dataset: 'test',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
