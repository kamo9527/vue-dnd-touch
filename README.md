vue-dnd-touch
========
Makes your elements draggable in Vue.

Some of goals of this project worth noting include:

* support desktop and mobile 
* Vue data-driven philosophy
* Supports both of Vue 1.0 and Vue 2.0


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
          'img_url...',
          'img_url...',
          'img_url...',
          'img_url...',
          'img_url...',
          'img_url...',
          'img_url...',
          'img_url...'
        ]
    }
  }
}
</script>

<template>
  <div class="color-list">
      <div 
          class="color-item" 
          v-for="(item, index) in images" v-dragging="{ item: item, list: images, group: 'item' }"
          :key="index">
          <img :src="item" />
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

`v-dragging="{ item: item, list: images, group: 'item' }"`

#### Arguments:

 * `{item} Object`
 * `{list} Array`
 * `{group} String`

 `group` is unique key of dragable list.


# License

[The MIT License](http://opensource.org/licenses/MIT)
