# cookie操作组件

该组件用于`JavaScript`进行cookie存取操作。如下API介绍:

## 地址链接

- 源码所在位置：https://github.com/372623460jh/cookie/tree/master/dist

- dev链接：http://libs.ijianghe.cn/js/cookie/cookie.js

- pro链接：http://libs.ijianghe.cn/js/cookie/cookie.min.js

## API

- **设置cookie**

    * 用于设置当前域下的cookie
    * HttpOnly属性如果在cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，这样能有效的防止XSS攻击。
    * 设置cookie(只能设置domain为p当前域，path为当前域下的路径)
    * path（指定了 cookie 将要被发送至哪个或哪些域中的那个路径）
    * domain（指定了 cookie 将要被发送至哪个或哪些域中）
    * secure（标识只有当一个请求通过 SSL 或 HTTPS 创建时，包含 secure 选项的 cookie 才能被发送至服务器）
    * expires（超时时间）
    
	```javascript.
    cookie('name',
        'jianghe',
        {
            path: '/cookie',
            domain: 'localhost',
            expires: 7
        }
    );
    ```
- **读取cookie**
	用于读取当前域下的cookie
	
    ```javascript
    /**
     * 读取当前域下的cookie
     */
    var coo = cookie('name');
    console.log(coo);
    ```
