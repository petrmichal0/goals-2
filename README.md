# Goals-2

## Project Title and Description
Goals-2 is a simple React Native application that allows users to add and manage goals using a clean and intuitive user interface.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/590b7692-f9f0-4392-be4b-18aa8eefd2f6" width="250" alt="Mobile Goals App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation (for Development)](#installation-for-development)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (for End Users)](#demo-for-end-users)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Add, view, and delete goals.
- Smooth transitions using modal animations.
- Responsive UI that works on Android.

## Installation (for Development)

> **Note:** This section is intended for developers who want to run the app locally on their development environment (e.g., Visual Studio Code).

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v8.x or higher
- **Expo CLI**: v6.x

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/Goals-2.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Goals-2
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### 1. Starting the Development Server
To start the development server, run:
```bash
npm start
```

### 2. Running the App on a Device

To run the app on a simulator or physical device:

- For Android:
    ```bash
    npm run android
    ```
   
## Screenshots

<table>
  <tr>
    <th>Homepage</th>
    <th>Add Goal</th>
    <th>Added Goal</th>
  </tr>
  <tr>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/646112af-a883-4ac8-9756-2c6049e56ddc" target="_blank">
        <img src="https://github.com/user-attachments/assets/646112af-a883-4ac8-9756-2c6049e56ddc" width="130" height="300" alt="Homepage">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/866db1f7-3285-42e1-b282-1390e822759c" target="_blank">
        <img src="https://github.com/user-attachments/assets/866db1f7-3285-42e1-b282-1390e822759c" width="130" height="300" alt="Homepage">
      </a>
    </td>
    <td style="border: 1px solid black;">
      <a href="https://github.com/user-attachments/assets/018125fb-0fa4-413d-86a4-c1cb108edd43" target="_blank">
        <img src="https://github.com/user-attachments/assets/018125fb-0fa4-413d-86a4-c1cb108edd43" width="130" height="300" alt="Homepage">
      </a>
    </td>
  </tr>
</table>

## Demo (for End Users)

### 1. Try the App with Expo Go or Web Preview
You have two options to try the app:

1. **Web Preview (Launch Snack)**:
   - Simply click this link: [Open in Snack](https://snack.expo.dev/@petrmichal0/goals-2?platform=android).
   - The page will open with the **Android** tab selected.
   - Click the **Launch Snack** button to instantly run the app in the web-based Expo Snack environment.

2. **Expo Go on Your Mobile Device**:
   - Download the [Expo Go](https://expo.dev/client) app on your mobile device.
   - Open the Snack link: [Open in Snack](https://snack.expo.dev/@petrmichal0/goals-2?platform=android).
   - Select the **My Device** tab.
   - Scan the QR code with the **Expo Go** app on your mobile device to launch the app on your phone.

### 2. Download the App Directly
You can also download the app's installation file directly to your device:

- [Download APK for Android](https://1drv.ms/u/s!Atg7bg8FYV5vpMk0y64zCFNc-WwSRg?e=nJfuxI)

## Project Structure

```css
Goals-2/
├── assets/
│   ├── images/
│   │   ├── goal.png
│   │   ├── adaptive-icon.png
│   │   ├── favicon.png
│   │   ├── icon.png
│   │   ├── splash.png
├── components/
│   ├── GoalInput.js
│   ├── GoalItem.js
├── App.js
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
└── .gitignore
```

## Technologies Used

[![React Native Badge](https://img.shields.io/badge/-React_Native-61DAFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DAFB)](#)
[![Expo Badge](https://img.shields.io/badge/-Expo-000020?style=for-the-badge&labelColor=black&logo=expo&logoColor=white)](#)

## Third-Party Libraries

- **Expo Status Bar**: A component that provides status bar configuration and control in Expo projects.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
