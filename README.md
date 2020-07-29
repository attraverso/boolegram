May 16th, 2020

### Project description:

A mockup of Telegram Web's interface, to further practice the skills used for the [Whatsapp Web interface mockup](https://github.com/attraverso/js-html-css-boolzap) with different layout requirements.

### Features:
1. possibility to 'send' messages from user input and have them visually appear in-chat
2. automated answer after 1 second from user message
4. contact search that filters existing contacts
5. clicking on a contact on the left panel shows the corresponding chat on the right

- layout-related:
  - a welcome page is displayed instead of a random chat
  - the mic icon to the right of the message input switches to send icon when there's text in the input field
- time-related:
  - every new message gets an updated timestamp that always shows up in hh:mm format
  - 'last seen at' gets updated whenever entering a new chat to match the timestamp of its last messsage
  - 'last seen at' gets updated at every new message in the corresponding chat
  - the timestamp on the contact box gets updated at every new message in the corresponding chat
- input-related:
  - empty messages cannot be sent
  - empty searches are not considered
  - searches are case-insensitive and start every time a key is pressed
  - the search input can be cleared by means of a single, x-shaped button that only appears when there's text in the search input
  - messages can be sent by pressing the enter key
- the last message in a chat also gets displayed in the corresponding contact box preview
- automated answers are picked at random from a predetermined set

### Libraries:
- jQuery
- Handlebars
