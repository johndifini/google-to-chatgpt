const OPENAI_API_KEY = 'PUT API KEY HERE'; // Replace with your actual API key

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.url.startsWith('https://www.google.com/search?q=')) {
    const query = new URL(details.url).searchParams.get('q');
    
    console.log('Intercepted Google search:', query);

    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": query}]
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Received response from OpenAI API:', data);
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        const result = data.choices[0].message.content;
        chrome.tabs.create({
          url: `results.html?query=${encodeURIComponent(query)}&result=${encodeURIComponent(result)}`
        });
      } else {
        throw new Error('Unexpected response structure from OpenAI API');
      }
    })
    .catch(error => {
      console.error('Error in background script:', error);
      chrome.tabs.create({
        url: `error.html?message=${encodeURIComponent(error.message)}`
      });
    });
  }
}, { url: [{ urlPrefix: 'https://www.google.com/search?q=' }] });

console.log('Background script loaded');