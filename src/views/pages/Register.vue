<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm @submit.prevent="submit">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                  v-model="form.name"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="@"
                  v-model="form.email"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                  v-model="form.password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  class="mb-4"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <button type="submit" class="btn btn-success btn-block">Create Account</button>
                <div v-if="error" class="alert alert-danger mt-4">{{error}}</div>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <CCol col="12 p-0 mt-3" class="text-right d-flex justify-content-between">
<!--                <CButton color="link" class="px-0" :to="'forgot-password'">Forgot pass?</CButton>-->
              </CCol>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
  import firebase from "firebase";

  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          password: ""
        },
        error: null
      };
    },
    methods: {
      submit() {
        console.log(this.form)
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then(data => {
            data.user
              .updateProfile({
                displayName: this.form.name
              })
              .then(() => {});
          })
          .catch(err => {
            this.error = err.message;
          });
      }
    }
  };
</script>
