@echo off

rem Run Git Pull
git pull

rem Run Git Add to add all files
git add --all

rem Prompt the user to enter the commit message
set /p commitMessage=Please enter the commit message:

rem Run Git Commit with the user-entered commit message
git commit -m "%commitMessage%"

rem Run Git Push
git push
