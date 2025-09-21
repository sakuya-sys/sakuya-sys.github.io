# Mayuri靶机

## 端口信息

先扫一下端口信息

<img width="1026" height="305" alt="Image" src="https://github.com/user-attachments/assets/0cd9b9bd-c1da-479c-a7a2-ae6f6ba38b80" />

开了2个web服务

## http

先看看80端口

<img width="1322" height="655" alt="Image" src="https://github.com/user-attachments/assets/b636aff7-0b7d-47b6-b1fe-c2749090e4b3" />

是一个查询价格的网站

<img width="1135" height="735" alt="Image" src="https://github.com/user-attachments/assets/63a6c7ee-b6ad-41b2-96b2-4b2ebbef0f24" />

输入数字编号会回显数据试试输入别的东西看看回显情况

<img width="1091" height="707" alt="Image" src="https://github.com/user-attachments/assets/da5d9613-ae9a-47cb-a034-09bfb1711f6c" />

输入字母回显了报错信息我们把报错信息给ai帮我们看看这是什么数据库

<img width="685" height="96" alt="Image" src="https://github.com/user-attachments/assets/3a2f7881-531f-489d-a0f9-2858deaf6302" />

是cypher数据库在网上搜一下有关这个数据库的注入方法https://blog.csdn.net/Che_ng/article/details/145965471https://blog.csdn.net/Che_ng/article/details/145965471找到这篇文章写了有关cypher注入的内容

<img width="1105" height="872" alt="Image" src="https://github.com/user-attachments/assets/314b2def-dc24-454c-9405-f4ebcd714f73" />

先丢了一个测试的payload成功回显所以道具的价格那么就可以确认确实有注入漏洞这个时候我们别忘了再去看看那个8080端口web服务是干什么的

<img width="1072" height="489" alt="Image" src="https://github.com/user-attachments/assets/2d4ffa23-3d80-4a2a-86d4-03b2d1892feb" />

是一个登录框 猜测80端口可以爆出来我们想要的账号密码回到80端口 爆出节点标签

<img width="1063" height="508" alt="Image" src="https://github.com/user-attachments/assets/e250f9b6-63cb-4f85-bdca-686ab3e83891" />

确认节点标签有个User那么直接爆这个节点的数据就行

<img width="1053" height="708" alt="Image" src="https://github.com/user-attachments/assets/238374f5-09f9-4112-920c-30249ec4cdcb" />

最后得到账号密码OOOkkkaaabbbeee:Okabe

<img width="1065" height="595" alt="Image" src="https://github.com/user-attachments/assets/7510fcb7-0797-4dd7-82f4-761183542ea3" />

登进去直接有命令行可以用了 直接弹shell登上去看看

## ssh

<img width="985" height="552" alt="Image" src="https://github.com/user-attachments/assets/71d1b975-162d-4e90-877b-890033670dc6" />

<img width="571" height="129" alt="Image" src="https://github.com/user-attachments/assets/389b8f13-bdf2-4784-98c4-86e25972dee3" />

成功登上去home目录有个kyoma的账户直接先读取user的flag 看看user.txt有没有读的权限

<img width="438" height="162" alt="Image" src="https://github.com/user-attachments/assets/ad565c45-a261-4e4f-9dfb-d1bb1796ac94" />

这里kyoma文件夹没法被读取 但是可以被执行 文件也刚好可以被读这里刚好就直接读出来了 也是比较凑巧的

## root

经过一顿翻找并没有什么可用的东西最后在环境变量中找到疑似密码的数字

<img width="797" height="566" alt="Image" src="https://github.com/user-attachments/assets/9654beaa-4a47-4624-8cec-50cfcfa071bd" />

根据之前web网页上面的内容可以知道这个靶机neta了命运石之门看过命运石之门的都知道1.129848这个数值就是世界线变动率其实没看过的话 pass这个也应该想到可能是password我们用这个密码登上去试试

<img width="702" height="334" alt="Image" src="https://github.com/user-attachments/assets/5ca5aeaf-5ba5-44f4-bd3a-0c2a0e1db292" />

成功登录kyoma的账号我们看看有没有可以用的命令

<img width="503" height="91" alt="Image" src="https://github.com/user-attachments/assets/5bcfc96a-d9e4-4779-86f1-ce7dcba630d3" />

并没有可以用的命令我们再去找找有suid的命令

<img width="507" height="260" alt="Image" src="https://github.com/user-attachments/assets/ac2d9e59-47dc-4a80-a101-a8fb27e4c751" />

发现叫TimeMachine的程序有suid 还就在home目录下其home目录下还有邮件

<img width="368" height="371" alt="Image" src="https://github.com/user-attachments/assets/d99e85ef-9fe0-4316-9ff0-365f818a291c" />

邮件内容提示我们要去使用时间机器

<img width="813" height="376" alt="Image" src="https://github.com/user-attachments/assets/a89d1d4e-abf3-4161-856d-1e4478b997ea" />

使用完之后一开始并没有什么特别的变化多次使用后发现那个时间戳一直和真实时间是同步的猜测可能调用了什么命令把TimeMachine拿到ida里面看看

<img width="1776" height="993" alt="Image" src="https://github.com/user-attachments/assets/3e8cdf27-450a-4e29-aba9-e7b66108e677" />

发现在这个函数里面有调用一个命令

<img width="1262" height="525" alt="Image" src="https://github.com/user-attachments/assets/64dd233c-05c1-424b-8990-28cab2106f76" />

调用了timedatectl这个命名那么提权思路就清楚了我们构造一个同名的timedatectl命令 但是实际上是bash 然后把这个同名的timedatectl命令的路径的优先级排到最前面 使得我们自己构造的同名的timedatectl命令被优先执行直接写一个shell脚本拿root

<img width="348" height="196" alt="Image" src="https://github.com/user-attachments/assets/700f7c69-a367-4606-a543-78be2b8fc5a2" />

在改一下这个shell脚本的权限然后执行就可以拿到root了

<img width="714" height="423" alt="Image" src="https://github.com/user-attachments/assets/e624e484-5c1a-4153-b9f1-9d18f0a844e8" />

这里的shell是个哑shell 没有交互 但是没有大碍

<img width="456" height="90" alt="Image" src="https://github.com/user-attachments/assets/00ff0da7-b257-4cda-8133-c1cac1ed9b9f" />

最后拿到root的flag


# 关于环境变量提权

主要来自于这篇文章

[[Linux-环境变量提权 - 1vxyz - 博客园](https://www.cnblogs.com/1vxyz/articles/17659773.html)](https://www.cnblogs.com/1vxyz/articles/17659773.html)

命名的执行是根据环境变量中的目录去寻找命令的

简单来说通过环境变量去提权 就是劫持命令 去执行我们自己构造的同名命令

从而提权

当然前提是这个最开始执行的命令是有suid的

## suid

是一种linux中特殊权限

允许命令可以暂时以特殊权限去执行此命令

可以通过

`find / -type f -perm -4000 2>/dev/null`

来寻找这类命令

---

感谢你看到这

![Image](https://github.com/user-attachments/assets/e541c6aa-f7af-4bcf-add5-7e63bf166bb7)