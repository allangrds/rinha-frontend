type AlertProps = {
  message: string
  type: 'error'
}

const getAlertClasses = (type: AlertProps['type']) => {
  switch (type) {
    case 'error':
      return 'bg-red-100 border-red-400 text-red-700'
  }
}

export const Alert = ({ message, type }: AlertProps) => (
  <div className={`border rounded-md p-4 mb-4 ml-3 ${getAlertClasses(type)}`}>
    <p className="text-sm font-medium">{message}</p>
  </div>
)
