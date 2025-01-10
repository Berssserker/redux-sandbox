import { Alert } from 'antd'

export const ErrorMessage = ({ error }) => {
  return <Alert message="Ooops!" description={error} type="error" showIcon style={{ margin: 'auto' }} />
}
