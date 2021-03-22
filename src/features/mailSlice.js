import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
    sentmailboxIsOpen: false,
    inboxIsOpen: true,
    inbox:"",
    sent:"",
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    },
    inbox:(state,action)=>{
      state.inbox=action.payload
    },
    sent:(state,action)=>{
      state.sent=action.payload
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true
    },
    openSentmailbox: (state) => {
      state.sentmailboxIsOpen = true
      state.inboxIsOpen = false
    },
    openInbox: (state) => {
      state.sentmailboxIsOpen = false
      state.inboxIsOpen = true
    },
  },
})

export const {
  selectMail,
  openSendMessage,
  closeSendMessage,
  openSentmailbox,
  openInbox,
  inbox,sent,
} = mailSlice.actions

export const selectOpenMail = (state) => state.mail.selectedMail

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen
export const selectSentmailboxIsOpen = (state) => state.mail.sentmailboxIsOpen
export const selectInboxIsOpen = (state) => state.mail.inboxIsOpen
export const inboxlenght = (state) => state.mail.inbox
export const sentlength = (state) => state.mail.sent

export default mailSlice.reducer
