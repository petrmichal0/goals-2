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
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Add, view, and delete goals.
- Smooth transitions using modal animations.
- Responsive UI that works on both Android and iOS.

## Installation

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

4. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. Run the app in a simulator or on a physical device using:
    ```bash
    npm run android
    ```
    or
    ```bash
    npm run ios
    ```

2. Use the app to add and manage your goals. Tap "Add new goal" to open the modal, enter your goal, and submit it.

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

## Demo Link

Check out the live demo of the application [here](https://web-final-v1.netlify.app/).

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

- **Expo**: Used for rapid development and easy deployment.
- **React Native**: Provides the core framework for building the mobile app.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
