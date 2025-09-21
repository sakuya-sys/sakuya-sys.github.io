
# team靶机

## 端口信息

<img width="1245" height="350" alt="Image" src="https://github.com/user-attachments/assets/fcdaf876-d345-4650-904a-2fb3d3284da3" />

开了两个http分别访问一下

## http

<img width="1791" height="819" alt="Image" src="https://github.com/user-attachments/assets/507e78ee-5469-4d0d-9b5f-3b0b324e7da0" />

80端口的web服务就只是一个静态页面没有用

<img width="961" height="717" alt="Image" src="https://github.com/user-attachments/assets/ce4afcb4-37db-40a4-95d5-ad63fee96a36" />

8000端口的web服务是一个登录框通过目录扫描可以扫到一个api接口目录

<img width="1206" height="615" alt="Image" src="https://github.com/user-attachments/assets/4c79a0c2-eec9-4662-a12f-f69fe06402a4" />

<img width="1829" height="914" alt="Image" src="https://github.com/user-attachments/assets/00f04fbc-3736-48e5-85ca-9b7f9524d631" />


经过测试 这里面的接口即使是能用的也没有什么有用的信息所以现在只能尝试爆破密码了从常见的用户名 admin root user guest test去爆破看看经过一通爆破

<img width="1482" height="1000" alt="Image" src="https://github.com/user-attachments/assets/8c9e028c-b865-47fb-a61e-288b8d25f191" />

最后发现有账号root:password123

<img width="2464" height="1336" alt="Image" src="https://github.com/user-attachments/assets/65057c33-7194-4e19-8c7c-6144febc9797" />



进去看是一个仪表盘翻了一下并没有什么可以直接getshell的点但是在密钥存储这里有点线索

<img width="2136" height="303" alt="Image" src="https://github.com/user-attachments/assets/57db9a9a-e11e-436c-a508-7d74afe308c9" />

猜测todd和ssh有关可能是账号我们直接hydra爆破一下

<img width="775" height="81" alt="Image" src="https://github.com/user-attachments/assets/6d249208-1c96-4cdc-a66c-e3f0ebd24b58" />

爆破出来是todd:password123找到在ll104567目录下有user.txt拿到user的flag

<img width="432" height="60" alt="Image" src="https://github.com/user-attachments/assets/edb94699-e4f4-4638-ad78-f4496f61559b" />

## root

老规矩先看看后台进程情况

<!-- Failed to upload "1 (11).png" -->

绝大部分都是root干的www-data只是开启了一个apache服务可以猜测如果拿到刚刚后台网站的shell就直接拿到root用户了

<img width="2518" height="1062" alt="Image" src="https://github.com/user-attachments/assets/0be0d8d4-d321-4785-9edf-0c35ad175451" />

我们可以在仓库里面新建一个仓库url写入我们的github仓库然后再github指定的仓库里面写上反弹shell最后制定一个模板任务就可以反弹shell了

<img width="1167" height="840" alt="Image" src="https://github.com/user-attachments/assets/298857a1-c7ae-43b0-88ef-cfdfed97d2fe" />

最后成功拿shell

<img width="736" height="349" alt="Image" src="https://github.com/user-attachments/assets/5c134588-5dc4-47bd-9a7e-d42eee300f8f" />


## 有关web服务的启动

启动web服务最好是创建一个专门的用户

在这个情况下即使被拿到shell

也比直接拿到root权限好

做了一手防护
---
感谢你看到这里

<img width="1093" height="1438" alt="Image" src="https://github.com/user-attachments/assets/09150dc1-1c99-4e71-a91f-c2e834c2524d" />
