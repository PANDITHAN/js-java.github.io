//get element from dom
const exicute = document.querySelector(".run_code")
const clear = document.querySelector(".clear_code")

let codeEditor = ace.edit("editorCode");
let defaultCode = 'console.log("Hello World!")';

let editorLib = {
    init() {
        // Configure Ace

        // Theme
        codeEditor.setTheme("ace/theme/dreamweaver");

        // Set language
        codeEditor.session.setMode("ace/mode/javascript");

        // Set Options
        codeEditor.setOptions({
            fontFamily: 'Inconsolata',
            fontSize: '12pt',
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
    }
}

editorLib.init();