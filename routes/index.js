import express from 'express'
import React from 'react'

const router = express.Router()
export default router

/* GET home page. */
router.get('/', (req, res, next) => {
  var props = { message: 'Secret Santa' }
  // var content = React.renderToString(React.createElement(DrawName, props))
  res.render('layout', {
    title: 'My App',
    content: null,
    props: props
  })
})
