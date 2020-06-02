# labs_kpp_2020
<!-- lab_1// Task #1. Check the user
Write the code which verify user rights.

Step 1. Check login
	Ask user for a login // use prompt()
	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”. 
	If it’s another string – then show “I don’t know you”.
	If the visitor enters "User" or "Admin", then prompt for a password.

Step 2. Check password:
	For an empty string or cancelled input, show “Canceled.”
	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”. In other case, show “Wrong password”.

Step 3. Greets the user appropriately:
	If the current time in hours is less than 20: // current hours – new Date().getHours()
o	For “User” show “Good day, dear User!”
o	For “Admin” show “Good day, dear Admin!”
	If the current time in hours is more or equals 20
o	For “User” show “Good evening, dear User!”
o	For “Admin” show “Good evening, dear Admin!”


Task #2. Guessing game
Your task is to write a simple simulator of casino roulette. 

Requirements:
Step 1:
	Create a prompt window (use confirm()). Show the message inside the window ‘Do you want to play a game?’.
	In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown (use alert).
Step 2:
	If user clicked ‘Ok’ – start a game: randomly (use Math.random()) choose an integer number in range [0; 5] (including 0 and 5) and ask user to enter a number of pocket on which the ball could land (use prompt()).
	User has 3 attempts to guess a number.
	If user guessed the number on which ball landed, on 1-st attempt prize is 100$ (maximum prize for current numbers range), 2-nd attempt – 50$, 3-rd attempt – 25$. 
	If user did not guess a number show the message ‘Thank you for your participation. Your prize is: … $’ (Use alert) and ask if he wants to play again (use confirm).
Step 3:
	If user did guess - Show the message ‘Congratulation, you won!   Your prize is: … $. Do you want to continue?’.
	If user does not want to continue – show the message ‘Thank you for your participation. Your prize is: … $’ (Use alert) and ask if he wants to play again (use confirm).
	If user does want to continue, make number range bigger at 5 as the previous one (for example [0; 5] -> [0; 10]), and two times bigger maximum prize (for example on 1-st attempt prize will be 200$, 2-nd attempt – 100$, 3-rd attempt – 50$). Prize must be added to the previous one and number of attempts should be set to 3 (user should have 3 attempts to guess a number for each numbers range)
	Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total prize and possible prize on current attempt. See Figure 1: -->

 
<!-- lab_2// Task #1. Check the user
Write the code which verify user rights.

Step 1. Check login
	Ask user for a login // use prompt()
	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”. 
	If it’s another string – then show “I don’t know you”.
	If the visitor enters "User" or "Admin", then prompt for a password.

Step 2. Check password:
	For an empty string or cancelled input, show “Canceled.”
	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”. In other case, show “Wrong password”.

Step 3. Greets the user appropriately:
	If the current time in hours is less than 20: // current hours – new Date().getHours()
o	For “User” show “Good day, dear User!”
o	For “Admin” show “Good day, dear Admin!”
	If the current time in hours is more or equals 20
o	For “User” show “Good evening, dear User!”
o	For “Admin” show “Good evening, dear Admin!”


Task #2. Guessing game
Your task is to write a simple simulator of casino roulette. 

Requirements:
Step 1:
	Create a prompt window (use confirm()). Show the message inside the window ‘Do you want to play a game?’.
	In case the user clicks the 'Cancel' button, the message 'You did not become a billionaire, but can.' should be shown (use alert).
Step 2:
	If user clicked ‘Ok’ – start a game: randomly (use Math.random()) choose an integer number in range [0; 5] (including 0 and 5) and ask user to enter a number of pocket on which the ball could land (use prompt()).
	User has 3 attempts to guess a number.
	If user guessed the number on which ball landed, on 1-st attempt prize is 100$ (maximum prize for current numbers range), 2-nd attempt – 50$, 3-rd attempt – 25$. 
	If user did not guess a number show the message ‘Thank you for your participation. Your prize is: … $’ (Use alert) and ask if he wants to play again (use confirm).
Step 3:
	If user did guess - Show the message ‘Congratulation, you won!   Your prize is: … $. Do you want to continue?’.
	If user does not want to continue – show the message ‘Thank you for your participation. Your prize is: … $’ (Use alert) and ask if he wants to play again (use confirm).
	If user does want to continue, make number range bigger at 5 as the previous one (for example [0; 5] -> [0; 10]), and two times bigger maximum prize (for example on 1-st attempt prize will be 200$, 2-nd attempt – 100$, 3-rd attempt – 50$). Prize must be added to the previous one and number of attempts should be set to 3 (user should have 3 attempts to guess a number for each numbers range)
	Each time you ask user to enter a number you should show him a range of cells, how much attempts he has left, his total prize and possible prize on current attempt. See Figure 1: -->

