University of Sialkot
Department of Software Engineering

Smart Queue Management System
Semester Project — Deliverable 1: Client-Side Architecture Report

Submitted by: Shiza Butt (23010101-047) & Fariha Qaleem (23010101-103)
Submitted to: Sir Museb Khalid
Submission Date: 2-07-2026
		 
	TOTAL GRADE POINT 	10 
 	 
	GRADE POINT 	 
ALLOCATED 
 	 
 
ASSESSOR’S COMMENTS  
 

INTRODUCTION
Hospitals and clinics that rely on manual, first-come-first-served queues often create long, unpredictable waiting times for patients and disorganised patient flow for doctors. The Smart Queue Management System addresses this problem by giving patients a simple way to see available doctors, generate a digital token, and monitor their live position in the queue, while giving doctors a dashboard to call the next patient and reset the queue at the end of a session.
This deliverable focuses exclusively on the client-side of the application. The goal was to fully architect and implement the frontend using Vue 3 and Vite before any backend service is introduced, so that the interface, navigation, and component structure can be validated independently using local, in-memory and localStorage-based data.
TECHNOLOGY STACK
The client application was built with the following technologies:
•	Vue 3 (Composition API with <script setup>) — core UI framework
•	Vite — development server and build tool
•	Vue Router 4 — client-side SPA routing and navigation guards
•	Bootstrap 5 — layout grid, form styling, and UI components
1.	SINGLE PAGE APPLICATION ROUTING
Vue Router is used to define separate routes for each major feature of the system. Every route is linked to a dedicated Vue component, making the application modular and easy to maintain. The application initially redirects users from the root path (/) to the login page (/login). After successful authentication, users can access different pages according to their role. Patients can navigate to the Doctor List, Book Token, and Queue Status pages, while doctors can access the Doctor Dashboard. Role-based access is implemented using the meta property and navigation guards.
Navigation between pages is performed using <RouterLink>, while <RouterView> is responsible for displaying the currently active component without refreshing the browser.
## code1
![code1](screenshots/picture1.png)
Routes	Purpose
/login	User login page for secure authentication
/register	New user registration page
/doctor	Display available doctor and their details
/book-token	Book a queue token for a selected doctor
/queue-status	View current queue position and token status
/doctor-dashboard	Doctor dashboard for managing patients and queue information
 
The screenshot provides evidence of the router configuration.
2.	MODULAR COMPONENT ARCHITECTURE
The Queue Management System follows a Modular Component Architecture in Vue 3. The application is divided into separate views and reusable components instead of writing all the code in a single file. This structure improves code readability, reusability, and maintenance.

Components/ (Reusable Components)
•	NavBar.vue → Handles navigation between different pages
•	DoctorCard.vue→ Displays doctor details in card format
•	PasswordField.vue → Reusable input field for password with show/hide feature
•	QueueStatusCard.vue → Shows patient queue status in a structured layout
•	TokenCounter.vue → Displays current token number in the queue
Views/(Main Pages)
•	Login.vue →User authentication (login page). 
•	Register.vue →New user registration page. 
•	DoctorList.vue→ Displays list of available doctors. 
•	BookToken.vue →Allows patients to book a queue token. 
•	QueueStatus.vue →Shows current queue position and status. 
•	DoctorDashboard.vue → Dashboard for doctors to manage patients and queue system.
⚙️ Core Files
•	router/index.js →Defines application routes and navigation logic using Vue Router. 
•	App.vue → Root component of the application. It Contains layout and <RouterView>. 
•	main.js →Entry point of Vue application. It Initializes and mounts the app. 
•	index.html →Main HTML file where Vue app is injected. 
•	vite.config.js→ Configuration file for Vite build tool.

3.	Inter-Component Communication (Props & Custom Emits)
## code2
![code2](screenshots/picture2.png)
## code3
![code3](screenshots/picture3.png)
## code4
![code4](screenshots/picture4.png)
## code5
![code5](screenshots/picture5.png)
## code6
![code6](screenshots/picture6.png)

4.	SCREENSHOTS
Patient Side

## code7
![code7](screenshots/picture7.png)


## code8
![code8](screenshots/picture8.png)

## code9
![code9](screenshots/picture9.png)

## code10
![code10](screenshots/picture10.png)

## code11
![code11](screenshots/picture11.png)

Doctor Side
## code12
![code12](screenshots/picture12.png)

## code13
![code13](screenshots/picture13.png)





When the Next Patient button is clicked, the current patient token number is incremented by one, indicating that the next patient in the queue is now being served.
When the Reset Queue button is clicked, the queue is reset, and the current token number returns to 1, starting the queue from the beginning.

5.	ARCHITECTURE TREE
## code14
![code14](screenshots/picture14.PNG)

6.	CONCLUSION
The Smart Diet Planner frontend is built with Vue 3 and Vite, offering a fast and responsive single-page application experience. It is structured in a modular way, where different features are divided into reusable components to keep the codebase maintainable and scalable. Navigation across the application is managed through Vue Router, ensuring a smooth user experience between pages. Data sharing between components is handled efficiently using props and emits, maintaining a clear and organized component hierarchy. Overall, the frontend provides a solid and well-structured base, which will be further enhanced in the next phase by integrating backend services to enable full functionality.
