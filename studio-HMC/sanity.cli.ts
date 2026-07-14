import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'o6hp51kg',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
    appId: 'jhn8ed7nmj57ys0y5khmlmb5',
  }
})
