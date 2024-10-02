# Enigma

A fun and simple platform where users can receive anonymous feedback and messages from friends, followers, or anyone with a link. Create your profile, share your link, and discover what people have to say—completely anonymous and all in good fun!

## Overview

This repository contains the source code for **_Enigma_**, an anonymous feedback web application. It allows users to create a profile, share a link, and receive anonymous messages or feedback from others. <br />
The application was built using Next.js, making use of **server components** and **server actions** for optimized performance and seamless server-side functionalities.

<!-- ## Live Demo

Check out the live demo of the application [here](). -->

## Features

- **Anonymous Feedback** - Share a unique link to receive anonymous messages or feedback from anyone.
- **Easy Link Sharing** - Effortlessly share your profile link across platforms to start receiving feedback.
- **Secure Authentication** - Protect your profile with secure login and user authentication.

## Techologies Used

- **Frontend & Backend**:

  - **Next.js**: Fullstack framework used for both frontend and backend APIs, enabling server-side rendering, static generation, and API routes for efficient data fetching.

- **UI Components & Styling**:

  - **Radix UI**: A library of accessible, unstyled UI primitives, giving you control over styling while maintaining accessibility.
  - **Tailwind CSS**: Utility-first CSS framework for rapid design and responsive layouts.

- **State Management & Forms**:

  - **React Query**: Used for managing server-side data fetching, caching, and synchronization.
  - **React Hook Form**: Lightweight library for handling forms and validation with a flexible API.

- **Authentication**:

  - **Session-based Authentication**: Implemented with Next.js and database sessions to securely manage user authentication.

- **Email Service**:

  - **Nodemailer**: A module for Node.js used to send emails from the application, used for password reset implementation.

- **Database**:

  - **MongoDB**: NoSQL database for storing user profiles, links, and session data.
  - **Mongoose**: ODM library to interact with MongoDB, providing schema-based data models.

<!-- ## Installation and Usage -->

## Running the Application Locally

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine.
- **MongoDB**: You will need a MongoDB database to store user profiles and links. You can run MongoDB locally on your machine or use a cloud provider like MongoDB Atlas.

- **Nodemailer Configuration**: If you intend to use Nodemailer for sending emails, you may need SMTP credentials from your email provider, which should also be added to your `.env.local` file.

### Installation

1. Clone the repository

```bash
git clone https://github.com/chideraemmanuel/enigma.git
```

2. Install dependencies

```bash
npm install
```

### Configuration

#### Environment variables

To configure the environment variables, please refer to the `.env.example` file located in the root of the project. This file contains all the necessary environment variables you need to set up. Simply create a `.env.local` file based on the example and update the values as required for your environment.

### Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Access the application: Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the application.
