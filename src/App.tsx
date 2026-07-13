import { Toaster } from 'sonner'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Toaster
        position='top-center'
        theme='dark'
        toastOptions={{
          style: {
            background: 'rgb(15 23 42 / 0.95)',
            border: '1px solid rgb(51 68 85 / 0.5)',
            color: 'rgb(226 232 240)',
          },
        }}
      />
      <AppRoutes/>
    </>
  )
}
export default App