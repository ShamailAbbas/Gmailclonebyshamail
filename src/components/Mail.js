import React from 'react'
import '../css/Mail.css'
import { useSelector } from 'react-redux'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import { selectOpenMail } from '../features/mailSlice'
import Mailoptions from './Mailoptions'

function Mail() {
  const selectedMail = useSelector(selectOpenMail)

  return (
    <div className='mail'>
      <Mailoptions />
      <div className='mail__body'>
        <div className='mail__bodyHeader'>
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className='mail__important' />
          <p>{selectedMail?.title}</p>
          <p> {selectedMail?.time}</p>
        </div>
        <div className='mail__message'>
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
