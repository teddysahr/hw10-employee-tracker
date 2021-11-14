// console.log("HI");

// DEPENDENCIES
const inquirer = require("inquirer");

// QUESTIONS

const mainMenuPrompt = [
  {
    type: "list",
    message: "Welcome to EMPLOYEE MANAGER! What would you like to do?",
    name: "menu",
    choices: [
      "view all departments",
      "view all roles",
      "view all employees",
      "add a department",
      "add a role",
      "add an employee",
      "update an employee role",
    ],
  },
];

const addDepartmentPrompt = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "add_department",
  },
];

const addRolePrompt = [
  {
    type: "input",
    message: "What is the name of the role?",
    name: "add_role_name",
  },

  {
    type: "input",
    message: "What is this role's salary?",
    name: "add_role_salary",
  },

  {
    type: "input",
    message: "What department is this role in?",
    name: "add_role_department",
  },
];

const addEmployeePrompt = [
  {
    type: "input",
    message: "First Name?",
    name: "add_employee_first",
  },

  {
    type: "input",
    message: "Last Name?",
    name: "add_employee_last",
  },

  {
    type: "input",
    message: "What is their role?",
    name: "add_employee_role",
  },

  {
    type: "input",
    message: "Who is their manager?",
    name: "add_employee_manager",
  },
];

const updateEmployeeRolePrompt = [
  {
    type: "input",
    message: "Which employee's role would you like to update?",
    name: "update_employee_",
  },

  {
    type: "input",
    message: "What is thier new role?",
    name: "update_new_role",
  },
];

// APP RUN

const mainMenu = () => {
  inquirer.prompt(mainMenuPrompt).then((menuAnswer) => {
    if (menuAnswer.menu === "view all departments") {
      console.log(`You chose ${menuAnswer.menu}`);
      viewAllDepartments();
      //getEngineerInfo();
    }

    if (menuAnswer.menu === "view all roles") {
      console.log(`You chose ${menuAnswer.menu}`);
      viewAllRoles();
    }

    if (menuAnswer.menu === "view all employees") {
      console.log(`You chose ${menuAnswer.menu}`);
      viewAllEmployees();
    }

    if (menuAnswer.menu === "add a department") {
      console.log(`You chose ${menuAnswer.menu}`);
      addDepartment();
    }

    if (menuAnswer.menu === "add a role") {
      console.log(`You chose ${menuAnswer.menu}`);
      addRole();
    }

    if (menuAnswer.menu === "add an employee") {
      console.log(`You chose ${menuAnswer.menu}`);
      addEmployee();
    }

    if (menuAnswer.menu === "update an employee role") {
      console.log(`You chose ${menuAnswer.menu}`);
      updateEmployeeRole();
    }
  });
};

const viewAllDepartments = () => {
  console.log("cool");
  mainMenu();
};

const viewAllRoles = () => {
  console.log("cool");
  mainMenu();
};

const viewAllEmployees = () => {
  console.log("cool");
  mainMenu();
};

const addDepartment = () => {
  inquirer.prompt(addDepartmentPrompt).then((addDepartmentAnswer) => {
    console.log(addDepartmentAnswer);
    mainMenu();
  });
};

const addRole = () => {
  inquirer.prompt(addRolePrompt).then((addRoleAnswer) => {
    console.log(addRoleAnswer);
    mainMenu();
  });
};

const addEmployee = () => {
  inquirer.prompt(addEmployeePrompt).then((addEmployeeAnswer) => {
    console.log(addEmployeeAnswer);
    mainMenu();
  });
};

const updateEmployeeRole = () => {
  inquirer.prompt(updateEmployeeRolePrompt).then((updateEmployeeRoleAnswer) => {
    console.log(updateEmployeeRoleAnswer);
    mainMenu();
  });
};

mainMenu();
