## Install   
angular: npm i -S ng-tv-focusable
react: npm i -S react-tv-focusable
vue: npm i -S vue-tv-focusable


## use   
### vue
```js
// main.js
import focusable from 'vue-tv-focusable'
Vue.use(focusable);

// component.vue
this.$tv.init(opt);
this.$tv.setScrollEl(el)
this.$tv.resetScrollEl();
this.$tv.resetFocusClassName();
this.$tv.resetFindFocusType();
this.$tv.resetInitDis();
this.$tv.resetKEYS();

<div v-focusable>可获取焦点的元素</div>
<div>不可获取焦点的元素</div>
```

### angular
```js
// app.module.ts
import { TvFocusableModule } from 'ng-tv-focusable';
@NgModule({
  declarations: [...],
  imports: [
    ...,
    TvFocusableModule
  ],
  ...
  bootstrap: [AppComponent]
})

// page.component.ts
import { $tv } from 'ng-tv-focusable';
$tv.init(opt);
$tv.setScrollEl(el)
$tv.resetScrollEl();
$tv.resetFocusClassName();
$tv.resetFindFocusType();
$tv.resetInitDis();
$tv.resetKEYS();

<div focusable>可获取焦点的元素</div>
<div>不可获取焦点的元素</div>
```

### react
```js
// page.js
import { $tv } from 'react-tv-focusable';
$tv.init({
  focusableClassName:'config-focusable-classname', // react中，必须配置项
})

$tv.init(opt);
$tv.setScrollEl(el)
$tv.resetScrollEl();
$tv.resetFocusClassName();
$tv.resetFindFocusType();
$tv.resetInitDis();
$tv.resetKEYS();

<div class="config-focusable-classname">可获取焦点的元素</div>
<div>不可获取焦点的元素</div>
```
### 参数说明
```js
init(opt);
opt: {
      // focusableClassName:string; //class名称字符串， react中才会有此项，且必须配置项
      initDis: number;
      focusClassName: string; // class名称字符串
      findFocusType: numbe;
      KEYS: {
        KEY_LEFT: number[];
        KEY_UP: number[]; 
        KEY_DOWN: number[];
        KEY_ENTER: number[]
      }
  }
  
  $tv.setScrollEl(el)
  el： element
```

