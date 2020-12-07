<!--  -->
<template>
  <div class="login">
    <div class="login-form">
      <div class="logo">
        <img src="../../assets/image/login/logo.png" alt="" />
      </div>
      <div class="form">
        <a-form
          :form="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
          @submit="handleSubmit"
        >
          <a-form-item label="Note">
            <a-input
              v-decorator="[
                'note',
                {
                  rules: [
                    { required: true, message: 'Please input your note!' }
                  ]
                }
              ]"
            />
          </a-form-item>
          <a-form-item label="Gender">
            <a-select
              v-decorator="[
                'gender',
                {
                  rules: [
                    { required: true, message: 'Please select your gender!' }
                  ]
                }
              ]"
              placeholder="Select a option and change input text above"
              @change="handleSelectChange"
            >
              <a-select-option value="male"> male </a-select-option>
              <a-select-option value="female"> female </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit"> Submit </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>

<style  scoped lang='scss'>
.login {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/image/login/big_bg.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // 登录form表单
  .login-form {
    position: relative;
    width: 27%;
    height: 100%;
    background: url('../../assets/image/login/login_form_bg.png') no-repeat;
    background-size: 100% 100%;
    // 登录框的logo
    .logo {
      position: absolute;
      left: 50%;
      top: 7%;
      transform: translateX(-50%);
      width: 19.1rem;
      height: 6.4rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
