import React, {useState} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

import useStyles from './styles'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const classes = useStyles()
  const handleSubmit = () => {

  }
  const clear = () => {

  }
  return (
    <Paper className={classes.paper}>
      <Form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></TextField>
        <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
        <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, message: e.target.value })}></TextField>
        <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}></TextField>
        <div className={classes.fileInput}>
          <FileBase type='file'multiple={false}onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })} />
          <Button className={classes.buttonSubmit} variant='contain' color='primary' size='large' type='submit'>Submit</Button>
          <Button variant='contain' color='secondary' size='small' fullWidth onClick={clear}>Clear</Button>
        </div>
      </Form>
    </Paper>
  )
}

export default Form
