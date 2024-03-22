import * as React from 'react'

import { Alert, ButtonInputFile } from './components'
import { readAndParseJsonFile } from './utils'

export default function App() {
  const [hasError, setHasError] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleOnSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    setHasError(false)

    const file = e.target.files?.[0]

    if (file) {
      readAndParseJsonFile(file as File)
        .catch(() => setHasError(true))
        .finally(() => setIsLoading(false))
    }
  }

  return (
    <main className="px-4 bg-gray-50 h-full flex flex-col justify-center items-center gap-4">
      {
        hasError && (
          <div className="mb-8">
            <Alert message="Invalid file. Please load a valid JSON file" type="error" />
          </div>
        )
      }
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        JSON Tree Viewer
      </h1>
      <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        Simple JSON Viewer that runs completely on-client. No data exchange
      </p>
      <ButtonInputFile
        label="Load JSON"
        onChange={handleOnSelectFile}
        loading={isLoading}
      />
    </main>
  )
}
