import * as React from 'react'

type ButtonInputFileProps = {
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  loading?: boolean
}

export const ButtonInputFile = ({ label, loading = false, onChange }: ButtonInputFileProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleOnClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <>
      <button
        className={`flex items-center rounded-lg text-md font-semibold py-3 px-4 ${loading ? 'bg-slate-700' : 'bg-slate-900'} text-white hover:bg-slate-700 w-fit ${loading ? 'cursor-not-allowed' : ''}`}
        type="button"
        onClick={handleOnClick}
        disabled={loading}
      >
        {loading ? (
          <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V2a10 10 0 00-10 10h2zm2 0a6 6 0 016-6V4a8 8 0 00-8 8h2zm2 0a4 4 0 014-4V6a6 6 0 00-6 6h2zm2 0a2 2 0 012-2V8a4 4 0 00-4 4h2z"></path>
          </svg>
        ) : null}
        <span>{label}</span>
      </button>
      <input
        type="file"
        accept=".json"
        ref={inputRef}
        className="hidden"
        onChange={onChange}
      />
    </>
  )
}
