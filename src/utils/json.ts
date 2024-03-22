export const readAndParseJsonFile = (file: File) => (
  new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (event) => {
      try {
        const target = event.target?.result as string
        const json = JSON.parse(target)
        resolve(json)
      } catch (error) {
        reject(error)
      }
    }
    reader.onerror = (error) => reject(error)
    reader.readAsText(file)
  })
)
