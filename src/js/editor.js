//get element from dom
const consoleLogList = document.querySelector(".editor__console-logs");
const exicutebtn = document.querySelector(".run_code");
const clearbtn = document.querySelector(".clear_code");

let codeEditor = ace.edit("editorCode");
let defaultCode = 'console.log("Hello World!")';
let consoleMessages = [];

let editorLib = {
  clearConsoleScreen() {
    consoleMessages.length = 0;

    // Remove all elements in the log list
    while (consoleLogList.firstChild) {
      consoleLogList.removeChild(consoleLogList.firstChild);
    }
  },
  printToConsole() {
    consoleMessages.forEach((log) => {
      const newLogItem = document.createElement("li");
      const newLogText = document.createElement("pre");

      newLogText.className = log.class;
      newLogText.textContent = `> ${log.message}`;

      newLogItem.appendChild(newLogText);

      consoleLogList.appendChild(newLogItem);
    });
  },
  init() {
    // Configure Ace

    // Theme
    codeEditor.setTheme("ace/theme/dracula");

    // Set language
    codeEditor.session.setMode("ace/mode/javascript");

    // Set Options
    codeEditor.setOptions({
      fontFamily: "monospace",
      fontSize: "12pt",
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    });

    // Set Default Code
    codeEditor.setValue(defaultCode);
  },
};

//Events
//exicute
exicutebtn.addEventListener("click", () => {
  // Clear console messages
  editorLib.clearConsoleScreen();
  //get input from code editor
  const userCode = codeEditor.getValue();

  // Run the user code
  try {
    new Function(userCode)();
  } catch (err) {
    console.error(err);
  }

  // Print to the console
  editorLib.printToConsole();
});

//reset
clearbtn.addEventListener("click", () => {
  // Clear ace editor
  codeEditor.setValue(defaultCode);
  // Clear console messages
    editorLib.clearConsoleScreen();
});

editorLib.init();
