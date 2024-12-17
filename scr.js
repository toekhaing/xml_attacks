// Example XSS payload: Display an alert box
alert("This is XSS";


document.body.innerHTML = `
  <h1 style="color: red; text-align: center;">
    XSS Attack Demonstration
  </h1>
  <p style="text-align: center;">
    This content was injected via an XSS payload.
  </p>
`;
