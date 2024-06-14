import { useTranslation } from 'react-i18next'
import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { SlideUp } from 'components/common/Transition'

interface Props {
  open: boolean
  title?: string
  content: React.ReactNode
  type: 'alert' | 'confirm'
  onConfirm: () => void
  onCancel: () => void
}
export default function ConfirmDialog(props: Props) {
  const {t} = useTranslation()
  const { type, title = t('Confirm') } = props
  return (
    <Dialog open={props.open} onClose={props.onCancel} TransitionComponent={SlideUp}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {props.content}
      </DialogContent>
      <DialogActions>
        {type === 'confirm' && (
          <Button onClick={props.onCancel} variant="outlined" color="default">
            {t('cancel')}
          </Button>
        )}
        <Button onClick={props.onConfirm} variant="outlined" color="primary" autoFocus={true}>
          {t('confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
