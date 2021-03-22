import React from 'react'
import '../css/SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from '../features/mailSlice'
import { db } from '../Firebase'
import firebase from 'firebase'

import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm()
  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  const onSubmit = async (formData) => {
    console.log(formData)
    await db.collection('emails').doc(formData.to).collection('inbox').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    await db
      .collection('emails')
      .doc(user.email)
      .collection('sent')
      .add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(dispatch(closeSendMessage()))
  }
  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h3>New Message </h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className='sendMail__close'
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='to'
          placeholder='To'
          type='email'
          ref={register({ required: true })}
        />
        {errors.to && <p className='sendMail_error'>To is required !</p>}
        <input
          name='subject'
          placeholder='Subject'
          type='text'
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className='sendMail_error'>Subject is required !</p>
        )}
        <input
          name='message'
          placeholder='Message...'
          className='sendMail__message'
          type='text'
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className='sendMail_error'>Message is required !</p>
        )}

        <div className='sendMail__options'>
          <Button
            className='sendMail__send'
            variant='contained'
            color='primary'
            type='submit'
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
