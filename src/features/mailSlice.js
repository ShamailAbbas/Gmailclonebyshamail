import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
    sentmailboxIsOpen: false,
    inboxIsOpen: true,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload
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
} = mailSlice.actions

export const selectOpenMail = (state) => state.mail.selectedMail

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen
export const selectSentmailboxIsOpen = (state) => state.mail.sentmailboxIsOpen
export const selectInboxIsOpen = (state) => state.mail.inboxIsOpen

export default mailSlice.reducer
