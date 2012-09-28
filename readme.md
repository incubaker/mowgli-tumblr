# Mowgli Tumblr Theme

The theme has been revised to utilize `gh-pages` and github as a CDN / static asset repository rather then using tumblr's theme [uploader](www.tumblr.com/themes/upload_static_file).

The theme was going to be version controlled using github anyway so why not also utilize `gh-pages` to serve the static files to the theme?

By creating a tumblr variable within the `tumblr.html` file, show as:

	<meta name="text: offsite" content="http://incubaker.github.com/mowgli-tumblr/"/>
	
I can define the assets directory using `{text: offsite}` anywhere in the theme, in case we choose to upload this repository to one of our own servers in the future, everything will still work.

The `tumblr.html` file is equipped with the `{text: offsite}` directory variable but this does not work if you wish to render the HTML locally on your machine (as seen [here](http://incubaker.github.com/mowgli-tumblr/tumblr.html)), to combat this i've included a `index.html` (as seen [here](incubaker.github.com/mowgli-tumblr)) file that contains relative urls to the local files that the theme uses.

---

#### Workflow

To change something other than HTML* like styles and scripts all that is needed is for you to push the changes to the `gh-pages` branch and it will reflect the live site.

Unfortunately any HTML changes need to be done first in the repo (to keep everything versioned) then manually inserted into tumblr's theme box.
