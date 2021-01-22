<template>
  <div class="global">
    <h1>H1 nadpis</h1>
    <h2>H2 nadpis</h2>
    <h3>H3 nadpis</h3>
    <h4>H4 nadpis</h4>
    <h5>H5 nadpis</h5>
    <p>Běžný odstavec</p>

    <div class="py-2">
      <CustomButton title="Button" primary />
      <CustomButton title="Button" secondary />
    </div>

    <div class="py-2">
      <CustomButton title="Button" icon="add-file" primary />
      <CustomButton title="Button" icon="add-file" secondary />
    </div>

    <div class="py-2">
      <CustomButton title="Button" icon="arrow-down-circle-fill" bootstrap primary />
      <CustomButton title="Button" icon="arrow-down-circle-fill" bootstrap secondary />
    </div>

    <div class="py-2">
      <CustomButton title="Button" wide />
      <CustomButton title="Button" wide secondary />
    </div>

    <div class="py-2">
      <CustomIcon name="add-file" />
      <CustomIcon name="add-file" width="64" />
      <CustomIcon name="add-file" color="/primary" />
      <CustomIcon name="add-file" color="/white" background />
    </div>

    <div class="py-2">
      <CustomIcon name="arrow-down-circle-fill" bootstrap />
      <CustomIcon name="arrow-down-circle-fill" scale="1.5" bootstrap />
      <CustomIcon name="arrow-down-circle-fill" color="#e91e63" bootstrap />
      <CustomIcon name="arrow-down-circle-fill" color="white" background bootstrap />
    </div>

    <div class="py-2">
      <CustomBadge title="Badge" />
      <CustomBadge title="Badge" secondary />
      <CustomBadge title="Badge" green />
      <CustomBadge title="Badge" white />
    </div>

    <div class="py-2">
      <b-row class="pb-3 d-flex justify-content-center">
        <CustomImage image="fakeApi" width="600" height="200" class="mr-2" />

        <CustomImage image="fakeApi_1" width="200" height="150" class="mr-2" />

        <CustomImage image="fakeApi" width="100" height="100" class="mr-2" />

        <CustomImage image="fakeApi" width="70" height="70" class="mr-2" />
      </b-row>

      <b-row>
        <CustomImage image="fakeApi" />
      </b-row>
    </div>

    <div class="py-2">
      <b-row cols="2" class="pt-3">
        <b-col>
          <CustomInput label="label" name="label" type="name" placeholder="placeholder" />
        </b-col>
        <b-col>
          <CustomInput label="label" name="label" type="password" placeholder="placeholder" />
        </b-col>
      </b-row>
      <b-row cols="1" class="pt-3">
        <b-col>
          <CustomInput label="label" name="label" type="email" placeholder="placeholder" />
        </b-col>
      </b-row>
      <b-row cols="1" class="pt-3">
        <b-col>
          <CustomInput label="label" name="label" type="email" placeholder="placeholder" height />
        </b-col>
      </b-row>
      <b-row cols="1" class="py-3">
        <b-col>
          <CustomInput label="label" name="textarea" placeholder="placeholder" textarea />
        </b-col>
        <b-col class="pt-3">
          <CustomInput label="label" name="textarea" placeholder="placeholder" rows="6" textarea />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.global {
  padding: 2rem 2rem;
  text-align: center;
}
</style>
