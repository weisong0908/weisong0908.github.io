---
title: Export Changed Files Between Two Commits
summary: Prepare a package that includes only the changed files between two commits
publishDate: 2022-07-03 16:20:25+08:00
draft: false
tags: [Git]
---

``` bash
git archive --output=package.zip update_commit $(git diff --name-only original_commit..update_commit --diff-filter=d)
```