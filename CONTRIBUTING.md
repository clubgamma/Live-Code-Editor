# Wanna contribute?
 
Here are the simple steps for contributing to this repo;

- **READ CODE OF CONDUCT**

Read the [Code of Conduct](https://github.com/clubgamma/code-of-conduct) before starting contributing.

- **Fork the repo**

Firstly fork the repo to your own GitHub account by clicking the Fork button on the top-right corner. Still can’t find it, check the image below.


![Screenshot 2021-09-26 at 1 21 05 AM](https://user-images.githubusercontent.com/68161473/134784443-01839d0e-28ed-48ff-81e7-039a4ddd1d2a.png)


After the successful fork, you'll acknowledge a copy of this repo on your own.
 
  - **Clone the repo**
  
Now it's time to copy this repo to my own laptop/PC. To clone the repo you can write the below command in **Git Bash**

        > git clone <REPO_LINK_FROM_YOUR_ACCOUNT>
    
You can get the repo link from the Download section in the repo copied in your account. If you’re still facing problems check out the image below.
![Screenshot 2021-09-26 at 1 21 41 AM](https://user-images.githubusercontent.com/68161473/134784464-05d6fe6e-b015-46b3-91c0-043be0d9957d.png)




  - **Set up remote repo**

- When you clone your fork, it will automatically set your fork as the "origin" remote. Use git remote -v to show your current remotes. You should see the URL of your fork (which you copied in step 3) next to the word "origin". 
If you don't see the "origin" remote, you can add it using the git command below.

        > git remote add origin <REPO_LINK_FROM_YOUR_ACCOUNT>

- Now you have to set up the upstream. write the following Git command to set up the upstream.
> git remote add upstream https://github.com/clubgamma/Live-Code-Editor.git
 
- Now pull the latest changes from original repo to your local changes by firing the below command
        > git pull upstream master
  
- **It's Code Time now**
  
First of all, make a folder named as your GitHub username which is compulsory. 


![image](https://user-images.githubusercontent.com/52206701/94184858-2a006180-fec2-11ea-9bdc-8bec3d3d1f72.png)


- After that start writing code inside that folder only and you know what you have to code.

   - **Now it's time to save the work**

      - Stage the changes you have made by firing the below command
        > git add -A
      - Commit the changes 
        > git commit -m "Description of changes/your work"
      - Push the changes to your forked repo
        > git push origin master
        
  - **Let's finish this**
- Go to your forked repo on GitHub website and refresh the page, you'll see something like the below image


![image](https://user-images.githubusercontent.com/52206701/94185006-6633c200-fec2-11ea-9cb8-d3efd2713d20.png)


- Click on pull-request and you will be redirected to another page where you will see something like below image 


![image](https://user-images.githubusercontent.com/52206701/94185055-73e94780-fec2-11ea-8bcf-8eb838a2fad2.png)

  
- After that you have to write your GitHub username as the title of your pull-request and describe your work if you want and that's it!! Create a pull-request by clicking the button
Also add the below 2 lines in the description. It is compulsory for successful submission.

 - [X] I have read the Code Of Conduct.
        
 - [X] I have followed all the steps of submission properly.


**Woohoo!! Congratulations on making your open source contribution🎉**
**Wait for some time to get your PR merged by our team**
