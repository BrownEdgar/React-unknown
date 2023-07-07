import ReactDOM from 'react-dom/client'
import store from './app3/store'
import { Provider } from 'react-redux'

import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)