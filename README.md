# todofrontend
Created with CodeSandbox
Clone the repository

frontend setup instructions:
1.Clone the repository:

git clone <your-repo-url>
cd <your-repo-directory>
Install dependencies

 Tech Stack
Frontend: React (JavaScript)

Backend: Express + MongoDB + JWT (already done)

 Step-by-Step Frontend Setup

 step 1:: Using CodeSandbox
Go to https://codesandbox.io.

Click “Create Sandbox”.

Choose “React” as the template.

It will create a project with:
srtucture:
App.js
index.js
public/
src/
✅ Option 2: Locally (Optional)
bash
Copy
Edit
npx create-react-app task-manager-frontend
cd task-manager-frontend
npm start
🥈 Step 2: Setup Folder Structure
Inside src/, organize files:

src/
├── App.js
├── Login.js
├── Sign.js
├── index.js
You already mentioned you have only these three files. Keep them under src/.

step 3. Setup App.js (Main UI)
This file shows the task manager (after login/signup), and fetches tasks using the token stored in localStorage.

Add logic to:

Read JWT from localStorage

Fetch tasks

Display tasks

Allow delete, update status, and priority

Optional: Add greeting using stored username

Step 4: Setup Login.js & Sign.js
Both files will:

Collect username & password

Send them to /login or /register endpoint

Store the returned token and redirect to App.js

Use axios.post() for API requests.

 Step 5: Token Handling (Auth Flow)
After login/register, store JWT in localStorage:


localStorage.setItem("token", res.data.token);
Also store the username:


localStorage.setItem("username", username);
In App.js, use that token in your API requests:

headers: { Authorization: `Bearer ${token}` }
Step 6: Styling (Optional but Recommended)
Use Tailwind CSS or simple CSS to style the task cards, input fields, and buttons.

To use Tailwind CSS in CodeSandbox:

Open Sandbox settings → Add Tailwind under templates

Or use CDN in index.html

Step 7: Test All Functionality
Sign up → login → create tasks

Test status/priority updates

Ensure JWT is required for protected actions

Test on browser reload (token persists)




