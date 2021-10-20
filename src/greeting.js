const handleGreeting = ({ params }, response) => {
  if (!params.name) {
    response.send('Hello world!');
  } else {
    const message = `Hello ${params.name}!`;
    response.send(message);
  }
}

module.exports = handleGreeting;