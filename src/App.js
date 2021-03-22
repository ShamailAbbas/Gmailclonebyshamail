import React, { useEffect } from 'react'
import './css/App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Mail from './components/Mail'
import SendMail from './components/SendMail'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'

import { auth } from './Firebase'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  selectSendMessageIsOpen,
  selectSentmailboxIsOpen,
} from './features/mailSlice'
import { selectUser } from './features/userSlice'
import { login } from './features/userSlice'
import Inbox from './mailcategory/Inbox'
import Sent from './mailcategory/Sent'
import EmailRow from './components/EmailRow'
import EmailList from './components/EmailList'

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const sentmailboxIsOpen = useSelector(selectSentmailboxIsOpen)
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      }
    })
  }, [])

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className='App'>
          <Header />
          <div className='app_body'>
            <Sidebar />
            <Switch>
              <Route path='/mail'>
                <Mail />
              </Route>
              <Route path='/inbox/Social'>
                <EmailList props={'social'} />
              </Route>
              <Route path='/inbox/Promotions'>
                <EmailList props={'promotions'} />
              </Route>

              <Route path={!sentmailboxIsOpen ? '/inbox' : '/sent'}>
                {!sentmailboxIsOpen ? <Inbox /> : <Sent />}
              </Route>
              <Redirect to='/inbox' />
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  )
}

export default App
