<template>
  <div class="global">
    <h1>
      {{ data.typography.h1 }}
    </h1>
    <h2>
      {{ data.typography.h2 }}
    </h2>
    <h3>
      {{ data.typography.h3 }}
    </h3>
    <h4>
      {{ data.typography.h4 }}
    </h4>
    <h5>
      {{ data.typography.h5 }}
    </h5>
    <p>
      {{ data.typography.p }}
    </p>
    <div class="py-2">
      <CustomButton title="Button" href="" primary />
      <CustomButton title="Button" href="" secondary />
    </div>
    <div class="py-2">
      <CustomButtonIcon title="Button" href="" icon="add-file" primary />
      <CustomButtonIcon title="Button" href="" icon="add-file" secondary />
    </div>
    <div class="py-2">
      <CustomButton title="Button" href="" wide />
      <CustomButton title="Button" href="" wide secondary />
    </div>
    <div class="py-2">
      <CustomIcon name="add-file" />
      <CustomIcon name="add-file" width="64" />
      <CustomIcon name="add-file" color="/primary" />
      <CustomIcon name="add-file" color="/white" background />
    </div>
    <div class="py-2">
      <CustomBadge title="Badge" />
      <CustomBadge title="Badge" secondary />
      <CustomBadge title="Badge" green />
      <CustomBadge title="Badge" white />
    </div>
    <div class="py-2">
      <b-row cols="2">
        <b-col>
          <CustomInput label="label" name="label" placeholder="placeholder" />
        </b-col>
        <b-col>
          <CustomInput label="label" name="label" placeholder="placeholder" />
        </b-col>
      </b-row>
      <b-row cols="1">
        <b-col>
          <CustomInput label="label" name="label" placeholder="placeholder" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import data from '@/content/testapi.json'

export default {
  components: {
  },

  data () {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.global {
  padding: 2rem 2rem;
  text-align: center;
}
</style>
