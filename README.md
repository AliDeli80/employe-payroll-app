# Employee Payroll App

A responsive employee payroll management application built with React. It features routing, context API for state management, styled-components for styling, and a simple login system with validation. The app includes multiple sections such as Home, About, Contact, and Personal, with a secure admin login.

---

## Features

- **Routing System**: Navigate between Home, About, Contact, Personal, and Root sections.
- **Context API (`useContext`)**: Manage global state efficiently.
- **Hooks (`useState`, `useEffect`, `useRef`)**: State management, side effects, and referencing DOM elements.
- **Styled Components**: Modular and reusable styling.
- **Login Authentication**: Simple login form with validation; admin credentials required.
- **Dummy Database**: Uses a JSON data structure to simulate employee data.
- **Multiple Sections**: Root, Home, About, Contact, Personal pages.

---

## Technologies Used

- React
- React Router
- React Context API
- Styled Components
- JSON (for dummy database)
- JavaScript (ES6+)

---

## Installation & Setup

1. Clone the repository:

```bash  
git clone https://github.com/AliDeli80/employee-payroll-app.git
```

2. Navigate to the project directory:
```bash
cd employee-payroll-app
```

3. Install dependencies:
```bash
npm install  react-icons react-router-dom styled-components
```

4. Run the development server:
```bash
npm start
```
Open http://localhost:3000 to view the app in your browser.

## Usage
- Login: Enter email and password. Use admin for both fields to access the app.
- Navigate: Use sidebar or menu to switch between sections: Home, About, Contact, Personal.
- Employee Data: View and manage employee payroll data displayed from the JSON database.
- Settings: Customize as needed.

## Notes
- The login validation is client-side only.
- In a real-world app, implement proper authentication and backend integration.
- Feel free to extend with features like employee editing, deleting, adding, etc.

## License


## Contact
For questions or contributions, please open an issue or pull request.

