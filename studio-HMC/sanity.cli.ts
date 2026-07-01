import {defineCliConfig} from 'sanity/cli'
import {structureTool} from 'sanity/structure'
import frontPage from "./schemaTypes/frontPage"

export default defineCliConfig({
  api: {
    projectId: 'o6hp51kg',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'jhn8ed7nmj57ys0y5khmlmb5',
  }
})
