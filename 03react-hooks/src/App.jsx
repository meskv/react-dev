import { useEffect, useState, useCallback, useRef } from "react";
import CopyNotification from "./components/Notification";
import PasswordDisplay from "./components/PasswordDisplay";
import PasswordControls from "./components/PasswordControls";

function App() {
  const passwordRef = useRef(null);

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, SetPassword] = useState("");
  const [copied, setCopied] = useState(false);

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

  const handleCopyClipboard = useCallback(() => {
    // navigator.clipboard available
    if (navigator.clipboard && window.isSecureContext) {
      try {
        passwordRef.current?.select();
        navigator.clipboard.writeText(password);
        setCopied(true);
        console.log("Password copied to clipboard");

        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset copied state after 2 seconds
      } catch (err) {
        console.error("Failed to copy password: ", err);
      }
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = password;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        passwordRef.current?.select();
        document.execCommand("copy");
        setCopied(true);
        console.log("Password copied to clipboard");

        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset copied state after 2 seconds
      } catch (err) {
        console.error("Failed to copy password: ", err);
      }
      document.body.removeChild(textArea);
    }
  }, [password]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      SetPassword(value);
    } else {
      SetPassword(passwordGenerator());
    }
  };

  useEffect(() => {
    // Generate initial password on mount
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="px-4 py-3 mt-8">
      <div className="">
        <div className="">
          <h1 className="text-center">Using React Hooks</h1>
        </div>
        {copied && (
          <CopyNotification show={copied} message="🔐 Password copied!" />
        )}

        <div className="w-full max-w-lg mx-auto bg-gray-800 text-gray-100 px-4 my-8 shadow-md rounded-lg">
          <div className="mx-auto flex flex-col gap-2 p-4 my-2">
            <h1 className="text-center text-2xl font-bold pt-4">
              Password Generator
            </h1>

            <PasswordDisplay
              passwordRef={passwordRef}
              password={password}
              onCopy={handleCopyClipboard}
            />
            <button
              onClick={generatePassword}
              className="bg-emerald-700 hover:bg-emerald-600 text-white w-2/3 mx-auto py-2 rounded cursor-pointer"
            >
              Generate Password
            </button>
          </div>

          <div className="pb-2">
            <PasswordControls
              length={length}
              setLength={setLength}
              numberAllowed={numberAllowed}
              setNumberAllowed={setNumberAllowed}
              charAllowed={charAllowed}
              setCharAllowed={setCharAllowed}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
