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
