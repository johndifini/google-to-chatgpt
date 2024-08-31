# Google to ChatGPT Chrome Extension

This Chrome extension intercepts Google search queries and sends them to the ChatGPT API, displaying the results in a new tab. It combines the power of Google Autocomplete with the intelligence of ChatGPT. It handles Google searches from Chrome's address bar or from Google's search page.

## Features

- Intercepts Google search queries
- Sends queries to ChatGPT API
- Displays ChatGPT responses in a new tab

## Configuration and Installation

1. Before using the extension, you need to add your OpenAI API key:
   1. IF don't have an API key already, you can get one here - https://platform.openai.com/api-keys
   1. Open the `background.js` file.
   1. Replace `'PUT API KEY HERE'` with your actual OpenAI API key.
1. Open Google Chrome and navigate to `chrome://extensions`.
1. Enable "Developer mode" by toggling the switch in the top right corner.
1. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Perform a Google search as you normally would.
2. The extension will intercept the search, send it to ChatGPT, and open a new tab with the response.
3. View the ChatGPT response in the newly opened tab.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
