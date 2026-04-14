
function BasicJavascript(){
    return(
        <>
            <div>
                <h4>Basic JavaScript</h4>

                <p>JavaScript Display Possibilities</p>

                <ul>
                    <li>Writing into an HTML element, using <code >innerHTML</code> or
                    <code >innerText</code>.</li>
                    <li>Writing into the HTML output using <code >document.write()</code>.</li>
                    <li>Writing into an alert box, using <code >window.alert()</code>.</li>
                    <li>Writing into the browser console, using <code >console.log()</code>.</li>
                </ul>

                <p><u><b>Note</b></u></p>
                <p>JavaScript is Case Sensitive</p>
                <p>JavaScript keywords are <b>case-sensitive</b>.</p>

                <h4>JavaScript Variables</h4>
                <dev>
                    Variables = Data Containers
                    JavaScript variables are containers for data.
                </dev>

                <div class="ws-note">
                    <h2>When to Use var, let, or const?</h2>
                    <p>1. Always declare variables</p>
                    <p>2. Always use <code >const</code> if the value should not be changed</p>
                    <p>3. Always use <code >const</code> if the type should not be changed (Arrays and Objects)</p>
                    <p>4. Only use <code >let</code> if you cannot use <code >const</code></p>
                    <p>5. Never use <code >var</code> if you can use let or const.</p>
                </div>

                <h4>JavaScript <b>Let</b></h4>
                <div class="ws-info">
                    <p>The <code >let</code> keyword was introduced in ES6 (2015)</p>
                    <p>Variables declared with <code >let</code> have <b>Block Scope</b></p>
                    <p>Variables declared with <code >let</code> must be <b>Declared</b> before use</p>
                    <p>Variables declared with <code >let</code> cannot be <b>Redeclared</b> in the same scope</p>
                </div>

                <h4>JavaScript Const</h4>
                <div class="ws-info">
                    <p>The <code >const</code> keyword was introduced in ES6 (2015)</p>
                    <p>Variables defined with <code >const</code> cannot be <b>Redeclared</b></p>
                    <p>Variables defined with <code >const</code> cannot be <b>Reassigned</b></p>
                    <p>Variables defined with <code >const</code> have <b>Block Scope</b></p>
                </div>

                <h4>Hoisting</h4>
                <p>Function declarations can be called before they are defined.</p>
                <p>Function expressions can not be called before they are defined.</p>
                <pre>
                    <code>
                    {`let sum = add(2, 3); // Will work

                    function add(a, b) {
                    return a + b;
                    }`}
                    </code>
                </pre>
                <p><b>Function expressions</b> are not hoisted in the same way as function declarations.</p>
                <p>They are created when the execution reaches their definition, and cannot be called before that point:</p>
                <pre>
                <code>
                    {`let sum = add(2, 3); // ⛔ Will generate error

                    const add = function (a, b) {
                    return a + b;
                    };`}
                </code>
                </pre>
                <p> 1. Use function declarations for general-purpose functions <br/>
                    2. Use function expressions when assigning functions to variables <br/>
                    3. Use function expressions in callbacks and event handlers
                </p>
            </div>
        </>
    );
}


export default BasicJavascript;