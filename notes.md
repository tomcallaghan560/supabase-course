**nodes_module** folder stores all the dependencies installed using npm or yarn. Always .gitignore it and never push it to git 1000s of files 

**npm install** It’ll read your `package.json` and rebuild `node_modules` perfectly can reinstall 

**npm install @supabase/supabase-js**


# Cloning someone else's repo

cd to location I want to repo

git clone https://github.com/someone-else/their-repo.git

git remote remove origin // remove the original remote to ensure I do not point to their GitHub

https://github.com/new // create own empty repo

git remote add origin https://github.com/tomcallaghan560/nextjs-course.git

git branch to check whether master or main

git push -u origin master

git push -u origin main


RLS row level security can define different types of rows and permissive

RLS define what users can and can not do on table. Can define different types of policies for people in table with different roles and explain if they can or cannot execute certain commands. So there is select, update, delete commands. 

When connecting to supabase it is same for nextjs, react router V7, remix

await supabase. // for all supabase operations


const {error, data} = awaitsupabase.from("tasks").insert({newTask, {}}) // "tasks" is TABLE and newTask can be LIST too.
