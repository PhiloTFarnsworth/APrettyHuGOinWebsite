document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#exampleForm")
    if (form) {
        //handle form
        form.onsubmit = () => {
            const text = document.querySelector('#formText').value
            const numeral = document.querySelector('#formNumber').value
            const ranger = document.querySelector('#formRange').value
            const time = document.querySelector('#formDate').value
            const yes = document.querySelector('#formBoxYes').checked ? 'YES' : 'NO'
            const no = document.querySelector('#formBoxNo').checked ? 'NO' : 'YES'
            const selection = document.querySelector('#formSelect').value
            // 'print' to #formResults
            document.querySelector('#formResults').innerHTML = "Text: " +
                text + " Number: " + numeral + " Range: " + ranger + " Time: " +
                time + " Boxes: " + yes + ' ' + no + " Selection: " + selection
            return false
        }
        //Clear Results
        document.querySelector('#clearResults').onclick = () => {
            document.querySelector('#formResults').innerHTML = "Form Cleared"
        }
    }
})