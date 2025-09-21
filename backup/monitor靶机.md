# monitor靶机

## 端口信息

搜索端口信息

<img width="780" height="247" alt="Image" src="https://github.com/user-attachments/assets/eec11fc1-5198-42b8-915d-6f5cd5397875" />

有个web服务

## web网页

访问过去是一个登录框

<img width="1209" height="720" alt="Image" src="https://github.com/user-attachments/assets/0e723ccb-f7ad-4c78-b010-6eeecf19e37a" />

随便尝试几个密码

admin:admin登进去

发现没有可以用的点

就是个静态页面

用Tscan工具爆破一下目录

<img width="1759" height="897" alt="Image" src="https://github.com/user-attachments/assets/5314520d-f083-4d2d-b255-0026f4688db7" />

<img width="846" height="678" alt="Image" src="https://github.com/user-attachments/assets/f8f724f9-6dc5-47cb-8aa3-241867d54f34" />

找到zabbix的后台页面

网上搜索一下zabbix的默认密码

找到Admin:zabbix

<img width="1841" height="927" alt="Image" src="https://github.com/user-attachments/assets/61ea1792-106f-4c92-ae60-7b02027559a3" />

成功登录

在这个后台找了一下功能点

有一个文件上传和一个执行脚本

一开始一直在尝试文件上传

发现并没有漏洞点

来到执行脚本这里

<img width="1917" height="903" alt="Image" src="https://github.com/user-attachments/assets/e090d4fb-9d16-4bc5-9a47-ba032cd3b9c4" />


我们把命令改成弹shell

然后执行命令

<img width="1788" height="779" alt="Image" src="https://github.com/user-attachments/assets/daa685f6-f77b-4396-bdea-689997173afc" />

点击ping

成功拿到shell

<img width="688" height="129" alt="Image" src="https://github.com/user-attachments/assets/fddb24f2-5cb4-4027-98ce-b6241bc91865" />

<img width="407" height="149" alt="Image" src="https://github.com/user-attachments/assets/ca71a0c4-9da0-4022-9751-586693c87070" />

切到home目录有个hyh账号

成功拿到user的flag

## root

查找可以以sudo执行的命令

<img width="1137" height="193" alt="Image" src="https://github.com/user-attachments/assets/10d030a2-b0b2-40de-bcb7-4e8d0a15df78" />

并没有可以执行的命令

这里直接去找hyh的密码

通过一顿翻找

最后在配置文件中发现不知道是什么账号的密码

<img width="627" height="290" alt="Image" src="https://github.com/user-attachments/assets/d001ea5f-7c8c-4611-b935-1290e339dcd3" />

<img width="636" height="301" alt="Image" src="https://github.com/user-attachments/assets/534e2aa3-5252-445a-b281-b13eb268af3a" />

尝试密码 发现是hyh的密码

<img width="609" height="199" alt="Image" src="https://github.com/user-attachments/assets/186b2d63-0d29-4a68-9b86-6c3a14cdcdda" />

看看这个账号有没有可以以sudo执行的命令

<img width="938" height="115" alt="Image" src="https://github.com/user-attachments/assets/047ae9fe-3649-446a-b3ea-727947ce6d83" />

有一个mount命令

查找有关信息

发现我们可以挂载文件

于是

`sudo mount -o /bin/bash /bin/mount`

`sudo mount`

拿到root权限

<img width="501" height="133" alt="Image" src="https://github.com/user-attachments/assets/ac61af1a-5443-4b2f-a5d0-c15c3f4af1ba" />

---

感谢你看到这

![Image](https://github.com/user-attachments/assets/5f348895-fc2a-46b9-8266-23cac583dd8f)