import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media, mediaAssetSource} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'powerkraft-main',

  projectId: 'wub429kh',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media()],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
  },

  schema: {
    types: schemaTypes,
  },
})
