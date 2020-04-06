<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CRow>
      <CCol>
        <CCardGroup>
          <CCard class="p-2">
            <CCardBody>
              <CForm>
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>

                <CInput
                  placeholder="Username"
                  autocomplete="username email"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="curent-password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CRow>
                  <CCol col="6" class="text-left">
                    <CButton color="primary" class="px-4">Login</CButton>
                  </CCol>
                </CRow>
              </CForm>

              <CCol col="12 p-0 mt-3" class="text-right d-flex justify-content-between">
<!--                <CButton color="link" class="px-0" :to="'forgot-password'">Forgot pass?</CButton>-->
                <CButton color="link" class="" :to="'register'">Register</CButton>
              </CCol>

            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import { db } from '../../main'
export default {
  name: 'Login',
  firestore () {
    return {
      locations: db.collection('locations').orderBy('createdAt')
    }
  }
}
</script>
