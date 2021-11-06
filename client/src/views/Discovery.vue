<template>
  <h1 class="font-thin my-4">
    Discover hue bridges
  </h1>
  <div v-if="!fastFetching">
    <div
      v-for="(bridge, index) in fastData.discoverBridgesFast"
      :key="index"
      class="border-2 rounded-lg p-2 cursor-pointer mb-1 hover:bg-gray-200"
    >
      <p class="text-center font-normal">
        {{ bridge.name }}
      </p>
      <p class="text-center">
        {{ bridge.ip }}
      </p>
    </div>
  </div>
  <CustomSpinner
    v-else
    class="m-auto"
  />
  <div class="px-4 mt-4">
    <CustomButton
      :disabled="fastFetching"
      @click="refreshFastFetching"
    >
      Start discovery
    </CustomButton>
  </div>
</template>

<script setup>
import { useQuery } from '@urql/vue'
import { discoverBridgesFast } from './documents'
import CustomButton from '../components/CustomButton.vue'
import CustomSpinner from '../components/CustomSpinner.vue'
function test() {
  console.log('working')
}
function refreshFastFetching() {
  fastExecute({requestPolicy: 'network-only'})
}
const {fetching: fastFetching, data: fastData, executeQuery: fastExecute} = useQuery({
  query: discoverBridgesFast
})
</script>