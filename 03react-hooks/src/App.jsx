import { useEffect } from "react";
import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [Password, SetPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = lowerCase + upperCase;
    if (numberAllowed) characters += numbers;
    if (charAllowed) characters += specialChars;

    let password = "";
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    SetPassword(password);
    return password;
  }, [length, numberAllowed, charAllowed, SetPassword]);

  const generatePassword = () => {
    const newPassword = passwordGenerator();
    SetPassword(newPassword);

    console.log(`Generated Password: ${newPassword}`);
  };

  const copyPasswordToClipboard = () => {
    navigator.clipboard
      .writeText(Password)
      .then(() => {
        console.log("Password copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      SetPassword(value);
    } else {
      SetPassword(passwordGenerator());
    }
  };

  return (
    <div className="px-4 py-3 mt-8">
      <div className="">
        <div className="">
          <h1 className="text-center">Using React Hooks</h1>
        </div>

        <div className="w-full max-w-lg mx-auto bg-gray-800 text-gray-100 px-4 my-8 shadow-md rounded-lg">
          <div className="mx-auto flex flex-col gap-2 p-4 my-2">
            <h2 className="text-center text-gray-200 text-xl font-medium">
              Password Generator
            </h2>
            <div className="mx-auto flex flex-row gap-4 p-4 my-2 overflow-hidden">
              <input
                type="text"
                name="pass"
                placeholder="password"
                onChange={handleChange}
                className="bg-gray-700 p-2"
              />

              <button onClick={copyPasswordToClipboard}>Copy</button>
            </div>
            <button
              onClick={generatePassword}
              className="bg-emerald-700 hover:bg-emerald-600 text-white w-2/3 mx-auto py-2 rounded cursor-pointer"
            >
              Generate Password
            </button>
          </div>

          <div className="flex flex-row gap-x-2 my-2">
            <div className="flex items-center gap-x-2 mb-4">
              <input
                type="range"
                min="6"
                max="100"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="cursor-pointer"
              />{" "}
              <label htmlFor="">Length: {length}</label>
              <label htmlFor="charallowed">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={(e) => {
                    setNumberAllowed(e.target.checked);
                  }}
                />
                Num Allowed
              </label>
              <label htmlFor="charallowed">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  onChange={(e) => {
                    setCharAllowed(e.target.checked);
                  }}
                />
                Char Allowed
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
