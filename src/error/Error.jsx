import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function Error() {
  return (
    <div>
        <Helmet>
            <title>this page is not found</title>
        </Helmet>
      this is error page
    </div>
  )
}
