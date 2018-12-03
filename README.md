vue-dnd-touch
========
Makes your elements draggable in Vue.

Some of goals of this project worth noting include:

* support mobile 
* Vue data-driven philosophy
* Supports Vue 2.0+


## Requirements

- Vue: ^2.0.0+

## Install

From npm:

``` sh

$ npm install vue-dnd-touch --save

```

## Usage

``` javascript
//main.js

import VueDND from 'vue-dnd-touch'

Vue.use(VueDND)
```

``` html
<!--your.vue-->
<script>
export default {
  data () {
    return {
        images: [
          {src: 'xxxx', name: 'xxxx'},
          {src: 'xxxx', name: 'xxxx'},
          {src: 'xxxx', name: 'xxxx'},
          {src: 'xxxx', name: 'xxxx'},
          {src: 'xxxx', name: 'xxxx'}
        ]
    }
  }
}
</script>

<template>
  <div class="color-list">
      <div 
          class="color-item" 
          v-for="(item, index) in images" 
          v-dragging="{ list: images, key: 'src',  group: 'group_01' }"
          :key="index">
          <img :src="item.src" />
          <div class="title">{{item.name}}</div>
      </div>
  </div>
</template>

<style lang="less">
/* 需要自定义拖拽图片的样式 */
  .fn-hide{display: none;}
  .vue_dnd_img {
    position: absolute;
    width: 5rem;
    height: 5rem;
    z-index: 100;
    box-shadow: 0 0 0.3rem 5px #3B5999;
    border-radius: 5px;
  }
</style> 
```

# API

`v-dragging="{ list: images, key: 'src',  group: 'group_01' }"`

#### Arguments:

 * `{list} Array: 拖拽图片数组`
 * `{key} String: 拖拽图片每项图片url的key`
 * `{group} String: 拖拽图片组名（唯一的），可以有多个组`

 `group` is unique name of multiple dragable lists.
 `key` is the key of each photo.


# License

[The MIT License](http://opensource.org/licenses/MIT)
