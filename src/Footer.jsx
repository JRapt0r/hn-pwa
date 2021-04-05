import React from "react";

function Footer() {
  return (
    <footer className="flex flex-row px-10 py-5 pb-10 space-x-6 text-black bg-black border-t border-black bg-opacity-5 border-opacity-20 justify-evenly">
      <div className="flex flex-col">
        <h4 className="mb-2 font-bold">About</h4>
        <a href="https://example.com" className="text-sm underline">Author</a>
        <a href="https://example.com" className="mb-4 text-sm underline">Source code</a>
        <div className="font-bold">API</div>
        <a href="https://github.com/HackerNews/API" className="text-sm underline">Official</a>
        <a href="https://github.com/cheeaun/node-hnapi/" className="text-sm underline">Third-party</a>
      </div>
      <div className="flex flex-col">
        <h4 className="mb-2 font-bold">Settings</h4>
        <div className="text-sm">Toggle theme</div>
      </div>
    </footer>
  );
}

export default Footer;