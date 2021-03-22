import React, { useState, useEffect, useRef } from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import { IconButton } from '@material-ui/core'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import '../css/EmailRow.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMail } from '../features/mailSlice'

function EmailRow({ id, title, subject, description, time, checkbox }) {
  const history = useHistory()
  const [checked, setchecked] = useState(false)
  const iconref = useRef('')
  const dispatch = useDispatch()
  useEffect(() => {
    if (checkbox == true) setchecked(true)
    if (checkbox == false) setchecked(false)
  }, [checkbox])

  const openMail = (e) => {
    const abc = e.target
    if (
      abc.className !== 'emailRow__options' &&
      (abc.className == 'emailRow__title' ||
        abc.className == 'emailRow__message' ||
        abc.className == 'emailRow__description' ||
        abc.className == 'emailRow__subject' ||
        abc.className == 'emailRow' ||
        abc.className == 'emailRow__time')
    ) {
      dispatch(
        selectMail({
          id,
          title,
          subject,
          description,
          time,
        })
      )

      history.push('/mail')
    } else return
  }
  return (
    <div onClick={(e) => openMail(e)} className='emailRow'>
      <div className='emailRow__options' ref={iconref}>
        <Checkbox
          checked={checked}
          onChange={(e) => setchecked(e.target.checked)}
        />

        <IconButton>
          <StarBorderOutlinedIcon checked={true} />
        </IconButton>

        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className='emailRow__title'>{title}</h3>

      <div className='emailRow__message'>
        <h4 className='emailRow__subject'>
          {subject} -
          <span className='emailRow__description'>{description}</span>
        </h4>
      </div>

      <p className='emailRow__time'>{time}</p>
    </div>
  )
}

export default EmailRow
