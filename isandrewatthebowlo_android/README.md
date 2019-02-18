# Is Andrew at the Bowlo : The Mobile app

- mvp : two buttons, "yes" and "no", which send a simple http request to an AWS API endpoint
- final : geo-location which checks every few minutes whether i'm within a hundred metres of the front door 
-- if so, and send the "yes" http request same as before
-- if not, and i was there during the last check, send the "no" request
