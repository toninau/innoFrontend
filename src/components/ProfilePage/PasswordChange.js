import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'

import { FormikTextField } from '../FormField'

import { Card, CardContent, Typography, Button, Box } from '@material-ui/core'

const PasswordChange = ({ handleSubmit, hide }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Box paddingBottom={2}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between">
            <Typography align="center" variant="h4">
              Password
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
              onClick={hide}>
              cancel
            </Typography>
          </Box>
        </Box>
        <Formik
          initialValues={{ password: '', passwordConfirm: '' }}
          validate={values => {
            const errors = {}
            const requiredError = 'Field is required'
            if (!values.password) {
              errors.password = requiredError
            }
            if (!values.passwordConfirm) {
              errors.passwordConfirm = requiredError
            } else if (values.passwordConfirm !== values.password) {
              errors.passwordConfirm = 'Password does not match'
            }
            return errors
          }}
          onSubmit={({ password }) => {
            hide()
            handleSubmit({ password })
          }}>
          {({ isValid, dirty }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column">
                <Box
                  display="flex"
                  flexDirection="row">
                  <Box paddingRight={1}>
                    <FormikTextField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="jorma123"
                    />
                  </Box>
                  <FormikTextField
                    label="Confirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="jorma123"
                  />
                </Box>
                <Button
                  type="submit"
                  disabled={!dirty || !isValid}
                  variant="contained"
                  color="primary">
                  submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

PasswordChange.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  hide: PropTypes.func.isRequired
}

export default PasswordChange