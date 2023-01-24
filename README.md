# Sanity Docker Bug Report

Trying to build with docker:

```bash
docker build -t sanity-docker .
```

Results in this error:

```
 > [build 10/10] RUN ["npx", "sanity", "build"]:
#17 1.469 - Clean output folder
#17 1.471 ✔ Clean output folder (2ms)
#17 1.471 - Build Sanity Studio
#17 2.340 ✖ Build Sanity Studio
#17 2.340
#17 2.340 Error: EINVAL: invalid argument, scandir '/proc/30/net'
```

Reproducible both with colima on darwin/arm64:


```
Client:
 Version:           20.10.21
 API version:       1.41
 Go version:        go1.19.3
 Git commit:        v20.10.21
 Built:             Thu Jan  1 00:00:00 1970
 OS/Arch:           darwin/arm64
 Context:           colima
 Experimental:      true

Server:
 Engine:
  Version:          20.10.18
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.18.6
  Git commit:       e42327a6d3c55ceda3bd5475be7aae6036d02db3
  Built:            Sun Sep 11 07:10:00 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          v1.6.8
  GitCommit:        9cd3357b7fd7218e4aec3eae239db1f68a5a6ec6
 runc:
  Version:          1.1.4
  GitCommit:        5fd4c4d144137e991c4acebb2146ab1483a97925
 docker-init:
  Version:          0.19.0
  GitCommit:
```

And docker on linux/arm64:

```
Client:
 Version:           20.10.18
 API version:       1.41
 Go version:        go1.18.7
 Git commit:        v20.10.18
 Built:             Thu Jan  1 00:00:00 1970
 OS/Arch:           linux/arm64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.21
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.18.7
  Git commit:       3056208
  Built:            Tue Oct 25 18:01:08 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          v1.6.9
  GitCommit:        1c90a442489720eec95342e1789ee8a5e1b9536f
 runc:
  Version:          1.1.4
  GitCommit:        v1.1.4-0-g5fd4c4d1
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```
