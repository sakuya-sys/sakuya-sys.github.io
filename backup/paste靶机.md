# paste靶机

## 端口信息

先扫一下端口

<img width="1249" height="606" alt="Image" src="https://github.com/user-attachments/assets/62ad3a81-ff3f-469a-af18-67f0b842fee3" />

主要是http和ftp可能有用

看到ftp的banner信息里面有一个guest:gu

提示我们用这个账号

但是这个banner信息可能不完整

我们去ftp先登录一下

## ftp

<img width="531" height="105" alt="Image" src="https://github.com/user-attachments/assets/b57bb684-3128-416d-9d3e-08696d45e5e3" />

提示我们用guest:guest登陆

我们这里直接用这个账号去登录ssh试试

## ssh

<img width="597" height="204" alt="Image" src="https://github.com/user-attachments/assets/afa34fbc-16f5-48cd-a414-ab8d8dfdf6c4" />

直接登上去了

看看home目录有没有flag

发现什么都没有

<img width="192" height="27" alt="Image" src="https://github.com/user-attachments/assets/1c73f5bf-a2ee-49f7-a345-13d0b8b2a1f0" />

还有一个film用户

我们看看/etc/passwd有没有什么信息

里面也没有什么有用信息

## http

<img width="692" height="681" alt="Image" src="https://github.com/user-attachments/assets/93687863-568e-4bd0-a78d-da0a696d7e96" />

打开页面

关于描述貌似是一个密码生成器

我们点一下产生密码

猜测这个就是film账号的密码

<img width="276" height="64" alt="Image" src="https://github.com/user-attachments/assets/edf050cc-88f9-4597-8fcf-600f5a7b9170" />

成功登录film账号

拿完flag看看有什么命令可以执行

<img width="888" height="120" alt="Image" src="https://github.com/user-attachments/assets/845265e9-3827-4bdf-a426-ca77857dfdc6" />

有个paste命令可以用

去网上查查这个命令有什么用

最后发现paste可以直接读取文件

于是root用户没必要登录 可以直接读取任意文件

<img width="389" height="64" alt="Image" src="https://github.com/user-attachments/assets/b2cacab3-c710-46a1-84e1-f28aa8ebce46" />

---
感谢你看到这

![Image](https://github.com/user-attachments/assets/09688eb0-1df9-4c9f-ad83-1c47aee66423)