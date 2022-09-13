---
title: Export Changed Files Between Two Commits
summary: Prepare a package that includes only the changed files between two commits
publishDate: 2022-07-03 16:20:25+08:00
draft: false
tags: [Git]
ep: 1
---

More often than not when we prepare deployment packages we need to remember the files that we have created from a couple of commits back and the process is often tedious and prone to human error. Fortunately the process can be automated with a single Git command:

``` bash
git archive --output=package.zip update_commit $(git diff --name-only original_commit..update_commit --diff-filter=d)
```

The Git command is made of two parts:
1. Generate a list of files that have been created and modified between the two commits
2. Archive the list of files in a zip folder

We shall use an example to illustrate what happens under the hood.

Assuming we have a directory called “DIFF” that has the following structure:
```
/DIFF/
| — folder1
| | — file1.txt
|
| — file2.txt
```

It has a folder called “folder1” in which a file “file1.txt” resides. There is also a file called “file2.txt” in the root folder.
Suppose we have the first commit to create all the files. In the commit we create the following content in file1.txt and file2.txt:

```
## file1.txt has the following content:
this is file 1
## file2.txt has the following content:
this is file 2
```

Then we have the second commit that appends a new line to file1.txt:

```
## this is what file1.txt looks like after the second commit
this is file 1
update file1.txt
```

And the third commit to appends a new line to file2.txt:

```
## this is what file2.txt looks like after the third commit
this is file 2
update file2.txt
```

The commit history is

```
c2505fe (HEAD -> master) update file2
c780650 update file1
f3f57c9 initial commit
```

Our goal is to generate a zip file called “deployment-v1” that includes the changes from first to third commit.

# Generate the list of new and modified files
The first half of the command obtains a list of all new or modified files between two commits. Since we know the starting point is the commit with ID f3f57c9 and the ending point is HEAD, we can have our first half:

```
git diff --name-only f3f57c9..HEAD --diff-filter=d
```

The option “name-only” tells the command to only generate the name of the files. The second option “diff-filter=d” instructs the command to exclude deleted files.

We have the following output immedidately:

```
file2.txt
folder1/file1.txt
```

# Archive the generated files
We have the list of files to be archived now. We will then use the list of files for the second half of the command to create the zip file.

```
git archive --output=deployment-v1.zip HEAD $(git diff --name-only f3f57c9..HEAD --diff-filter=d)
```

We provide the file name “deployment-v1” in the “output” option. At this point the command is aware of the files to be archived, but how does it know up to which commit should the content of the files be updated to? This is where we provide the parameter “HEAD” as the reference point. That also means if we provide any other commit ID as the parameter, the content of the archived files to be different.

Finally we have a zip file called “deployment-v1.zip” with the created and modified files.