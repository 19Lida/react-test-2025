import { Field, Form, Formik } from 'formik'
import React from 'react'

const SearchArticleForm = ({submit}) => {
    const handleSubmit=(values,actions)=>{
submit(values.query)
actions.resetForm()

    }
   
  return (
   <Formik initialValues={{query:''}} onSubmit={handleSubmit}>
    <Form>
        <Field name='query'/>
        <button type='submit'>Search</button>
    </Form>
   </Formik>
  )
}

export default SearchArticleForm
