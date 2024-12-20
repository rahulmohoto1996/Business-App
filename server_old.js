/* #version=0.0.0-0#5 rm 2024-10-22T19:21:57 4743C18BCB2FF1E9 */
/* #version=0.0.0-0#4 rm 2024-10-22T19:20:35 9614C3AC600172D9 */
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const eventServiceHandler = require("./eventServiceHandler.js");
var events = eventServiceHandler.mockData.events;

app.get('/events', (req, res) => {
    res.send(events);
});

app.get('/events/:id', (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(event => event.id === id);
    res.send(event);
});

// const eventServiceHandler = require("./eventServiceHandler.js");
// eventServiceHandler.getAllEvents();
// eventServiceHandler.getSelectedEventsFromId();