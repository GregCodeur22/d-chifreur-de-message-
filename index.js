const message = prompt("entrer votre message").toLowerCase();

for (let i = 0; i < message.length; i++) {
  if (message[i] === " ") {
    console.log(" ");
  } else {
    const encryptedLetter = message.charCodeAt(i);
    const realLetter = String.fromCharCode(
      ((encryptedLetter - 97 + 26 - 3) % 26) + 97
    );
    console.log(realLetter);
  }
}
