Stable: Windows 10 x64 / Windows 11 x64

Setup:
-Install Microsoft Edge
-Install NodeJS: https://nodejs.org/en/download (x64 .msi LTS), check "Automatically install the necessary tools. ...", & next to everything.
-Install VSCode 
-Install these VSCode extensions:
	-Angular Extension Pack
	-Angular Essentials
	-Angular Language Services
	-Angular Snippets
	-Angular Files
	-Microsoft Edge Tools for VS Code
	-Prettier - Code formatter

Now open VSCode, Open Folder: /my-app, click on Terminal -> New Terminal & run the following commands in terminal:
-rm -rf node_modules
-rm -rf package-lock.json
-npm install -g npm
-npm cache clean --force 
-npm i --force

Run Development Server:
-npm run dev

Build for Production:
-npm run build

Close VSCode terminal.

(Default) Open VSCode, Open Folder: /my-app, click on Terminal -> New Terminal & Run: -cd my-app -npm run-script dev

(Optional, Unit test) Open VSCode, Open Folder: /my-app, click on Terminal -> New Terminal & Run: -cd my-app -npm test

Now press F5 in VSCode. Next.JS will be debugged through the VSCode IDE.

-

Source from commit:
https://github.com/officiallerio/nextjs-15-starter/commit/048090310c9f066842dc33d8672f7f172c498312
