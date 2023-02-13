# Sessions
To add new sessions, simply make a new markdown file for the session. 

## Front matter
Provide the session information in the front matter of the file (the first lines enclosed by `---`)

- `title`: The text to be displayed in the expanding header
- `description`: Description text at the top of the session section
- `slides-link`: The full link to the slides
- `vid-links`: The video ID found in the Vimeo links. For example, `https://vimeo.com/535598169` becomes `535598169`
- `vid-titles`: The titles for each of the videos, in the same order as the links 
- `order`: An integer representing the position of the session in the order

(I wish there was a better way to format the video info but Jekyll doesn't have great support for this)