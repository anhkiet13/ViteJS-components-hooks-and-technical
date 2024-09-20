import React, { useCallback, useEffect, useState, useId, useRef } from "react";

const CustomHookPage = () => {
  // State for debounce hook
  const [check, setCheck] = useState("");
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 10000);

  // State for copy clipboard hook
  const [isCopied, copy] = useCopyToClipboard("Text to copy!");

  // useId hook to create single id for react component
  const id = useId();

  // Detect click outside component (very useful in create custom Popup)
  const clickMeDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!clickMeDivRef?.current?.contains(event.target)) {
        // Because this alert so annoyed so that i comment this function 
        // alert("You clicked outside of me!");
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickMeDivRef]);

  return (
    <div>
      <div>
        <h3>Debounce Hook</h3>
        <p>
          Current Value: {value} | Debounced Value: {debouncedValue} | check
          delay: {check}
        </p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        <h3>Copy clipboard Hook</h3>
        <button onClick={copy}>{isCopied ? "Copied!" : "Copy"}</button>
      </div>
      <div>
        <h3>useId Hook</h3>
        <label htmlFor={`email-${id}`}>Email</label>
        <input type="text" id={`email-${id}`} name="email" />

        <label htmlFor={`password-${id}`}>Password</label>
        <input type="password" id={`password-${id}`} name="password" />
      </div>
      <div>
        <h3>Click outsite event</h3>
        <div ref={clickMeDivRef}>Clicked me?</div>
      </div>
    </div>
  );
};

export default CustomHookPage;

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Copy clipboard hook
const useCopyToClipboard = (content) => {
  const [isCopied, setIsCopied] = useState(false);

  // Thực hiện copy và hiện toggle isCopied là true trong tg ngắn 1,25s khi chuyển thành false
  // để tắt toggle 
  // trả về hàm copy cho action click vào và copy
  const copy = useCallback(() => {
    navigator.clipboard
      .writeText(content)
      .then(() => setIsCopied(true))
      .then(() => setTimeout(() => setIsCopied(false), 1250))
      .catch((err) => alert(err));
  }, [content]);
  return [isCopied, copy];
};
