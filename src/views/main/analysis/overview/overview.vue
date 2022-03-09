<template>
  <div class="overview">
    <hy-card title="关于">
      <span>
        <b>VueTsCMS</b> 是基于<b
          >Vue3、Vuex、VueRouter、VueCLI、 ElementPlus 、TypeScript、Echart5 </b
        >等后台系统解决方案。
      </span>
    </hy-card>
    <hy-card title="技术栈">
      <ul class="technology-stacks">
        <li v-for="(item, index) in technologyStacks" :key="index">
          {{ item.title }}:<a href="javascript:;">{{ item.desp }}</a>
        </li>
      </ul>
      <hy-descriptions :options="DependenciesOptions" />
      <hy-descriptions :options="DevDependenciesOptions" />
    </hy-card>
    <hy-card title="项目解构">
      <pre>{{ TreeOptions }}</pre>
    </hy-card>
    <hy-card title="项目规范">
      <hy-descriptions :options="filenameStandard" />
      <hy-descriptions :options="componentStandard" />
      <hy-descriptions :options="commitStandard" />
    </hy-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyCard from '@/base-ui/card'
import HyDescriptions from '@/base-ui/description'
import technologyStacks from './config/technologyStacks'
import DependenciesOptions from './config/dependencies'
import DevDependenciesOptions from './config/devDependencies'
import TreeOptions from './config/projectTree'
import {
  filenameStandard,
  componentStandard,
  commitStandard
} from './config/projectStandard'
export default defineComponent({
  name: 'overview',
  components: { HyCard, HyDescriptions },
  setup() {
    return {
      DependenciesOptions,
      DevDependenciesOptions,
      TreeOptions,
      technologyStacks,
      filenameStandard,
      componentStandard,
      commitStandard
    }
  }
})
</script>

<style scoped lang="less">
.overview {
  color: #57606a;
  .technology-stacks {
    margin-bottom: 30px;
    li {
      font-weight: 600;
      font-size: 16px;
      line-height: 30px;
      a {
        margin-left: 20px;
        font-weight: 500;
        text-decoration: none;
        color: #409eff;
      }
    }
  }
  pre {
    font-size: 18px;
    font-weight: 600;
    background: #dee1e6;
  }
}
</style>
