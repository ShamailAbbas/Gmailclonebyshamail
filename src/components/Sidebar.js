import React from 'react'
import '../css/Sidebar.css'
import SidebarOption from './SidebarOption'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import NearMeIcon from '@material-ui/icons/NearMe'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import PersonIcon from '@material-ui/icons/People'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/MobileFriendly'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { openSendMessage } from '../features/mailSlice'
import { openSentmailbox } from '../features/mailSlice'
import { openInbox } from '../features/mailSlice'
import { inboxlenght } from '../features/mailSlice'
import { sentlength } from '../features/mailSlice'
function Sidebar() {
  const dispatch = useDispatch()
  const inbox = useSelector(inboxlenght)
  const sent = useSelector(sentlength)
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <Link
        to='/inbox'
        onClick={() => {
          dispatch(openInbox())
        }}
      >
        <SidebarOption
          Icon={InboxIcon}
          title='Inbox'
          number={inbox}
          // selected={false}
        />
      </Link>

      <SidebarOption Icon={StarIcon} title='Starred' number={0} />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={0} />

      <SidebarOption Icon={LabelImportantIcon} title='Important' number={0} />
      <Link
        to='/sent'
        onClick={() => {
          dispatch(openSentmailbox())
        }}
      >
        <SidebarOption Icon={NearMeIcon} title='Sent' number={sent} />
      </Link>

      <SidebarOption Icon={NoteIcon} title='Drafts' number={0} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={0} />

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
