# 测试案例1
---

<Common-Democode title="基本用法" description="基本按钮用法">
  <test-test1></test-test1>
  <highlight-code slot="codeText" lang="vue">
    <template>
      <div class="demo-button">
        <div>
          <Common-button>默认按钮</Common-button>
          <Common-button type="primary">主要按钮</Common-button>
          <Common-button type="success">成功按钮</Common-button>
          <Common-button type="info">信息按钮</Common-button>
          <Common-button type="warning">警告按钮</Common-button>
          <Common-button type="danger">危险按钮</Common-button>
        </div>
      </div>
    </template>
  </highlight-code>
</Common-Democode>

<Common-DemoApi></Common-DemoApi>

``` js{4}
	export default{
		data(){
			return:{
				msg:'Highlighted!'
			}
		}
	}
```

---
meta:
		- name:description
			content:hello
		- name:keywords
			constne:super duper seo
---

 Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |