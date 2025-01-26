

## Airbnb Clone  

### 📋 <a name="table">Table of Contents</a>  

1. 🤖 [Introduction](#introduction)  
2. ⚙️ [Tech Stack](#tech-stack)  
3. 🔋 [Features](#features)  
4. 🤸 [Quick Start](#quick-start)  

### <a name="introduction">🤖 Introduction</a>  

The Airbnb Clone is a full-stack hotel booking application that replicates the core functionalities of Airbnb. Built with React.js for the frontend, Node.js for the backend, and MongoDB for the database, it also integrates AWS S3 for secure and scalable image storage. The app features JWT-based authentication and a sleek, responsive UI designed with TailwindCSS.  

### <a name="tech-stack">⚙️ Tech Stack</a>  

- React.js  
- Node.js  
- Express.js  
- MongoDB  
- Tailwind CSS  
- AWS S3  

### <a name="features">🔋 Features</a>  

👉 **Browse Properties**: Explore a wide range of listings with detailed property information.  

👉 **Booking System**: Allows users to book properties seamlessly with real-time updates.  

👉 **Wishlist Functionality**: Save favorite properties for easy access later.  

👉 **Image Upload**: Secure media storage using AWS S3 for property images.  

👉 **User Authentication**: Features secure login and registration using JWT.  

👉 **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.  

and more, focusing on scalability and performance!  

### <a name="quick-start">🤸 Quick Start</a>  

Follow these steps to set up the project locally.  

**Prerequisites**  

Ensure you have the following installed:  

- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/) (Node Package Manager)  

**Cloning the Repository**  

```bash  
git clone https://github.com/santhosh10378/airbnb-clone.git  
cd airbnb-clone  
```  

**Installation**  

Install dependencies:  

```bash  
npm install  
```  

**Set Up Environment Variables**  

Create a `.env` file in the root directory and add:  

```env  
MONGODB_URI=  
AWS_ACCESS_KEY_ID=  
AWS_SECRET_ACCESS_KEY=  
JWT_SECRET=  
```  

Replace placeholder values with your MongoDB, AWS, and JWT credentials.  

**Running the Project**  

```bash  
npm run dev  
```  

Open [http://localhost:3000](http://localhost:3000) in your browser.  

---
