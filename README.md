
1.Cloning a Repository from GitHub:
   First, make sure Git is installed on your computer. If not, download it from the official Git website 1.
   Open a terminal and navigate to the directory where you want to clone the repository.
   Use the command git clone followed by the URL of the repository you want to clone. For example: git clone https://github.com/username/repository.git
   Press Enter to clone the repository.
2.Installing MongoDB:
   Download MongoDB Community Server from the official MongoDB website 1.
   Run the installer and follow the instructions on screen to install MongoDB.
   After installation, you can start MongoDB from the terminal by typing mongod or mongo or mongosh.
   (if you get any error in this part saying that you did not connect to mongodb, try this code first: brew services start mongodb/brew/mongodb-community)
3.Installing Postman:
   Download Postman from the official Postman website 4.
   Run the installer and follow the instructions on screen to install Postman.
4.Testing the Code:
   Navigate to the directory of the cloned repository and run the code. Typically, this involves typing npm install to install all necessary dependencies, and then in your terminal write node app.js to start the application.
   Open Postman and send requests to the local server (http://localhost:3000).
   if you want to post in any collection ou fetch a data just put http://localhost:3000/post/Products or http://localhost:3000/fetchall/Products. you can also try with supplier and Transactions.
