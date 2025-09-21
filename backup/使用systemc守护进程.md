## 使用systemd维护进程

使用systemd可以将服务注册为系统守护进程，使得服务可以长时间运作，断开ssh连接继续执行

创建/etc/systemd/system/服务名称.service

并改写配置

---

[Unit]
Description=Hexo Image Server
After=network.target

[Service]

### 指定工作目录

WorkingDirectory=工作路径(在哪里启动)

### 使用普通用户

User=your_username
Group=your_group

### 修复命令：添加绑定地址和正确端口

ExecStart=二进制程序的绝对路径

### 重启策略

Restart=on-failure
RestartSec=5s

### 安全限制（可选）

NoNewPrivileges=yes
PrivateTmp=yes

[Install]
WantedBy=multi-user.target

---

保存配置之后

sudo systemctl daemon-reload（重载配置信息）

sudo systemctl start 服务名

sudo systemctl status 服务名

正常情况下就可以正常运行了

sudo systemctl enable 服务名

开机自动启动

---

## lsof命令可以查找进程

lsof filename 显示打开指定文件的所有进程

lsof -a 表示两个参数都必须满足时才显示结果

lsof -c string 显示COMMAND列中包含指定字符的进程所有打开的文件

lsof -u username 显示所属user进程打开的文件

lsof -g gid 显示归属gid的进程情况

lsof +d /DIR/ 显示目录下被进程打开的文件

lsof +D /DIR/ 同上，但是会搜索目录下的所有目录，时间相对较长

lsof -d FD 显示指定文件描述符的进程

lsof -n 不将IP转换为[[hostname](https://baike.baidu.com/item/hostname/812870?fromModule=lemma_inlink)](https://baike.baidu.com/item/hostname/812870?fromModule=lemma_inlink)，缺省是不加上-n参数

lsof -i 用以显示符合条件的进程情况

lsof -i[46] [protocol][@[[host](https://baike.baidu.com/item/host/3758959?fromModule=lemma_inlink)](https://baike.baidu.com/item/host/3758959?fromModule=lemma_inlink)name|hostaddr][:service|port]

46 --＞ IPv4 or [[IPv6](https://baike.baidu.com/item/IPv6/172297?fromModule=lemma_inlink)](https://baike.baidu.com/item/IPv6/172297?fromModule=lemma_inlink)

protocol --＞ TCP or [[UDP](https://baike.baidu.com/item/UDP/571511?fromModule=lemma_inlink)](https://baike.baidu.com/item/UDP/571511?fromModule=lemma_inlink)

hostname --＞ Internet host name

hostaddr --＞ [[IPv4地址](https://baike.baidu.com/item/IPv4%E5%9C%B0%E5%9D%80/16742558?fromModule=lemma_inlink)](https://baike.baidu.com/item/IPv4%E5%9C%B0%E5%9D%80/16742558?fromModule=lemma_inlink)

service --＞ /etc/service中的 service name (可以不只一个)

port --＞ [[端口号](https://baike.baidu.com/item/%E7%AB%AF%E5%8F%A3%E5%8F%B7/10883658?fromModule=lemma_inlink)](https://baike.baidu.com/item/%E7%AB%AF%E5%8F%A3%E5%8F%B7/10883658?fromModule=lemma_inlink) (可以不只一个)

lsof -i :4000

查找端口号为4000的进程服务

## kill可以杀死进程

-l  信号，若果不加信号的编号参数，则使用“-l”参数会列出全部的信号名称

-a  当处理当前进程时，不限制命令名和进程号的对应关系

-p  指定kill 命令只打印相关进程的进程号，而不发送任何信号

-s  指定发送信号

-u  指定用户

kill 9 \<PID\>

杀死进程号为pid的进程

hexo

[Unit]

Description=Hexo Blog Server

After=network.target

[Service]

# 使用专用用户

User=root

# 设置环境变量

Environment="NODE_ENV=production"

Environment="PATH=/usr/nodejs/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin"

# 工作目录和启动命令

WorkingDirectory=/usr/blog

ExecStart=/usr/nodejs/bin/hexo server -p 80  # 改用高位端口

# 重启策略

Restart=always

RestartSec=5

StartLimitIntervalSec=60

StartLimitBurst=3

# 安全设置

NoNewPrivileges=yes

PrivateTmp=yes

[Install]

WantedBy=multi-user.target

im

[Unit]

Description=Hexo Image Server

After=network.target

[Service]

# 指定工作目录（图片所在目录）

WorkingDirectory=/usr/blog/source/_data/images

# 使用普通用户（非root更安全）

User=hexouser

# 修复命令：添加绑定地址和正确端口

ExecStart=/usr/bin/python3 -m http.server --bind 0.0.0.0 65532

# 重启策略

Restart=on-failure

RestartSec=5s

# 安全限制（可选）

NoNewPrivileges=yes

PrivateTmp=yes

[Install]

WantedBy=multi-user.target