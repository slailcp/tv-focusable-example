import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-example9',
  template: `
  <div class="form">
  <div class="group">
    <span class="key">姓名</span>
    <span class="value"><input class="text" type="text" [ng-focusable]/></span>
  </div>
  <div class="group">
    <span class="key">性别</span>
    <div class="value">
      <label><input type="radio" name="sex" [ng-focusable] (longPress)="longPress()"/> 男(longPress)</label>  
      <label><input type="radio" name="sex" [ng-focusable]/> 女</label>
    </div>
  </div>
  <div class="group">
    <span class="key">爱好</span>
    <div class="value">
      <label><input type="checkbox" name="like" [ng-focusable]/> 跑步</label>  
      <label><input type="checkbox" name="like" [ng-focusable]/> 打球</label>  
      <label><input type="checkbox" name="like" [ng-focusable]/> 游泳</label>  
      <label><input type="checkbox" name="like" [ng-focusable]/> 爬山</label>
    </div>
  </div>


  <div class="group">
    <span class="key">说明</span>
    <span class="value">
      <textarea [ng-focusable]></textarea>
    </span>
  </div>

  <div class="btns">
    <input [ng-focusable] class="btn cancel" type="button" (click)="click('取消')" value="取消"/>
    <button [ng-focusable] class="btn" (click)="click('保存')">保存</button>
  </div>   
</div>
  `,
  styles: [`
  .form{width:500px;}
  .group{display:flex;line-height:34px;}
  .key{width:100px;text-align:right;margin:5px 0 5px 10px;}
  .value{flex:1;margin:5px 0 5px 10px;}
  .text,textarea{display:block;border:1px solid #d8d8d8;width:200px;line-height:32px;height:32px;}
  label{padding-right:10px;}
  .btns{padding-top:40px;padding-left:122px;}
  .btn{background:#00a0e9;border:0;display:inline-block;min-width:100px;text-align:center;line-height:34px;color:#fff;border-radius:4px;margin-right:20px;}
  .btn.cancel{background:#d8d8d8;color:#333;}
  .focus{box-shadow:0 0 5px #00a0e9;}
  `]
})
export class Example9Component implements OnInit, OnDestroy, AfterViewInit {
      

  ngOnInit() { }

  ngAfterViewInit() {
    // window.$tv.formAutofocus = false; // 表单控件enter，不可以输入和选择
  }
  ngOnDestroy() {
   
  }
  counter(i: number) {
    return new Array(i);
  }
  click(type){
    alert(type)
  }
  longPress(){
    console.log('langpress')
  }
  
}
