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
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        primary
      />
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        secondary
      />
    </div>

    <div class="py-2">
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        icon="add-file"
        primary
      />
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        icon="add-file"
        secondary
      />
    </div>

    <div class="py-2">
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        icon="arrow-down-circle-fill"
        bootstrap
        primary
      />
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        icon="arrow-down-circle-fill"
        bootstrap
        secondary
      />
    </div>

    <div class="py-2">
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        wide
      />
      <CustomButton
        title="Button"
        :href="data.links.testLink"
        wide
        secondary
      />
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
      <b-row cols="2" class="pt-3">
        <b-col>
          <CustomInput
            :label="data.descriptions.label"
            name="label"
            type="name"
            :placeholder="data.descriptions.placeholder"
          />
        </b-col>
        <b-col>
          <CustomInput
            :label="data.descriptions.label"
            name="label"
            type="password"
            :placeholder="data.descriptions.placeholder"
          />
        </b-col>
      </b-row>
      <b-row cols="1" class="pt-3">
        <b-col>
          <CustomInput
            :label="data.descriptions.label"
            name="label"
            type="email"
            :placeholder="data.descriptions.placeholder"
          />
        </b-col>
      </b-row>
      <b-row cols="1" class="pt-3">
        <b-col>
          <CustomInput
            :label="data.descriptions.label"
            name="label"
            type="email"
            :placeholder="data.descriptions.placeholder"
            height
          />
        </b-col>
      </b-row>
      <b-row cols="1" class="py-3">
        <b-col>
          <CustomInput
            :label="data.descriptions.textarea"
            name="textarea"
            :placeholder="data.descriptions.placeholder"
            textarea
          />
        </b-col>
        <b-col class="pt-3">
          <CustomInput
            :label="data.descriptions.textarea"
            name="textarea"
            :placeholder="data.descriptions.placeholder"
            rows="6"
            textarea
          />
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
