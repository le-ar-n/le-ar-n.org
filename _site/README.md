# le-ar-n.org
`le-ar-n.org` is a static website using Jekyll to read content and Github Pages to host the site

## To edit content
**Note: While most of the content can be written in Markdown, there are a few custom styles that must use HTML tags. Fortunately these can be written in-line with the MD. For example, if you want to highlight text, you need to surround the word(s) with `<mark>` and `</mark>`**

### About and Get Started
Located in their respective sections in `./index.md`

Changing video data is similar to how it works for each session. In the front matter of the page (the topmost lines enclosed by `---`) `vid-links` is a list of the numerical ids of each Vimeo video, which can be found in the respective links. `vid-titles` corresponds to the titles of the videos, in the same order as `vid-links`. Videos are rendered in the same order they are listed.

### Sessions
Located within the `./_sessions/` folder

Each session has its own markdown file. Include the video data in the front matter (the block at the top of the file) and any content below that you want to be rendered as a text reference. Other attributes like the title and link to slides are also in the front matter.

## To run locally
Install Jekyll following [these instructions](https://jekyllrb.com/docs/installation/)

Navigate to this cloned repository and run `jekyll serve` in your terminal.

Go the preview URL returned by Jekyll (`http://localhost:4000/` by default) to see the site in your browser