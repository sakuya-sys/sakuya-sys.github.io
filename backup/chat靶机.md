# chat靶机

## 端口信息

<img width="1234" height="451" alt="Image" src="https://github.com/user-attachments/assets/b27efe06-a185-4f6e-90d7-055a6913336b" />

主要是22 2222 8000端口

## http

<img width="936" height="417" alt="Image" src="https://github.com/user-attachments/assets/766b628d-fe2c-4e1d-b34a-1b8869c9b0ac" />

打开是某个用户的目录没法超越目录只能在这个目录下查看

<img width="523" height="352" alt="Image" src="https://github.com/user-attachments/assets/d14fb53b-b333-4374-ae02-5a295591470d" />


.ssh里面有私钥可以尝试用私钥来免密登录公钥里面泄露了用户名称

<img width="168" height="48" alt="Image" src="https://github.com/user-attachments/assets/a94108b2-e2ec-4687-a4a8-b8a099ce5a81" />

## ssh chat

这个端口开放的服务是一个匿名聊天室

<img width="653" height="456" alt="Image" src="https://github.com/user-attachments/assets/927a6ff1-aa9a-48aa-b06d-8bbac967aa98" />

用户名可以随便输入尝试多次并没有什么可以攻击的地方

## ssh

使用私钥来尝试ssh免密登录

<img width="375" height="73" alt="Image" src="https://github.com/user-attachments/assets/41bcea41-2ad1-4be7-9040-738fa85e9fe0" />

虽然使用了私钥 但是并没有提示私钥是否正确 或者 权限问题 所以这个用户没法用私钥登录在之前的ssh chat也出现过todd可以进行尝试用todd和scycree去爆破密码

<img width="470" height="234" alt="Image" src="https://github.com/user-attachments/assets/85a2d2b1-6a0d-4a99-b0d3-a63313622d72" />

这里猜测todd:todd也是比较抽象但是成功了

<img width="603" height="406" alt="Image" src="https://github.com/user-attachments/assets/1e583045-c579-47bd-964a-531553bf3010" />

确实有scycree用户各自home目录下面都没有user的flag这个靶机可能只有root的flag了在scycree下面也确实有.ssh文件那么现在可以知道了，在网站里面的目录就是scycree的home目录映射出的

<img width="498" height="309" alt="Image" src="https://github.com/user-attachments/assets/d3396e87-bfda-4b4b-95dc-7b9948a1487e" />

`cat /etc/ssh/sshd_config`查看有关ssh的配置文件可以知道确实scycree被ban掉了 没法用私钥直接免密登录`sudo -l`也没有什么可以用的命令那么现在只能爆破scycree的密码了

<img width="489" height="324" alt="Image" src="https://github.com/user-attachments/assets/abd321b1-95d9-42cc-837d-1c96041f06a3" />

在本地开一个服务然后再靶机下载字典和工具suForce是一个可以在本地去爆破密码的工具suForce -u scycree -w 字典最后爆出来密码是welcome

<img width="904" height="96" alt="Image" src="https://github.com/user-attachments/assets/07e6df17-4c06-4a7a-85b3-e884436cf87d" />

scycree可以用ghfs命令先看看后台进程情况

<img width="981" height="288" alt="Image" src="https://github.com/user-attachments/assets/d2d13777-432c-4f93-bf5e-6cc6b28e86d1" />

看到这个地方就可以知道这个命令是干啥的了这个命令可以映射本地目录具体可以用法什么的可以去看看帮助手册

<img width="412" height="84" alt="Image" src="https://github.com/user-attachments/assets/a4474917-5592-4ceb-aecc-19336b85c971" />

这里直接将root目录做了映射

<img width="513" height="707" alt="Image" src="https://github.com/user-attachments/assets/a2876bcb-2675-4312-938b-a46b1bee5e64" />

这里就可以直接读root的flag了但是这里并没有登录root

### 该怎么登录root呢

<img width="223" height="105" alt="Image" src="https://github.com/user-attachments/assets/89b0be44-9595-4613-84b6-28e67b712515" />

在root下面也有.ssh文件那么可以将自己的公钥部署在靶机上面实现免密登录root回到帮助手册里面

<img width="359" height="60" alt="Image" src="https://github.com/user-attachments/assets/20a4ce36-1871-4803-b383-bf3f44f3a4b8" />

这一行里面可以实现文件上传`sudo ghfs -l 9000 -r /root -p /root`

<img width="1938" height="1041" alt="Image" src="https://github.com/user-attachments/assets/fab16f09-ddd2-4f33-b483-00f0fb845d67" />

最后只需把公钥部署在.ssh里面就可以免密登录了

<img width="629" height="286" alt="Image" src="https://github.com/user-attachments/assets/a5965aaf-5ce6-47b2-9646-8eba22496c08" />



## 关于ssh登录机制

<img width="1740" height="1809" alt="Image" src="https://github.com/user-attachments/assets/df860cf2-abc6-4721-b092-fdc985702f49" />

## 配置密钥与私钥

生成密钥对

`ssh-keygen -t rsa -b 4096 -f ~/.ssh`

部署公钥

`ssh-copy-id -i ~/.ssh/rsa_id.pub user@server`

完成后公钥会自动添加到 `~/.ssh/authorized_keys`

也可以手动配置公钥

直接将公钥内容写到authorized_keys里面就可以了

## 简单来说公钥就是关门的（锁） 私钥就是开门的（钥匙）

---
感谢你看到这
![Image](https://github.com/user-attachments/assets/f52bd376-80a8-4586-9f5f-64a59785315a)