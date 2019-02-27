# The Weekender Unofficial HD Remaster

Unofficial proof-of-concept modern update for MTA's Weekender. http://web.mta.info/weekender/

## Background

[Why New Yorkers Insisted On a "Worse" Subway Map - Cheddar Explains (YouTube)](https://www.youtube.com/watch?v=OdDsV19DBCU)

[![Why New Yorkers Insisted On a "Worse" Subway Map - Cheddar Explains (YouTube)](https://img.youtube.com/vi/OdDsV19DBCU/0.jpg)](https://www.youtube.com/watch?v=OdDsV19DBCU)

In the early 1970s, famed graphic designer Massimo Vignelli came to NYC to improve the MTA's outdated, ad-hoc signage system. During that time, he also redesigned the MTA subway map. It was the first time the MTA color-coded by routes, rather than by subway operator (which were already consolidated into the MTA). Designers regarded this as one of the best designed subway diagrams of all time, but New Yorkers hated it. In the 1990s, the map was replaced.

Today, the MTA's Weekender app is the only place where an updated version of Vignelli's diagram is still in use.

However, the Weekender, which launched in 2013, is starting to show its age. This project is an unofficial fan recreation of the Weekender application to take advantage of modern web technologies and design tweaks to improve performance, legibility, and accessibility.

## Goals

- **Responsive.** Expands to use as much screen real estate as possible, and will work on mobile devices, too.
- **Resolution-independent.** Renders crisply at any pixel density: Retina, 4K, etc.
- **Performant.** Interactions occur instantaneously, without a full page reload. Also deep-linkable.
- **Accessible.** Built in accordance with web accessibility best practices for people with disabilities.
- **Standards-compliant.** Alert data is converted to standard data format, e.g. Open311.
- **Open source.** Anyone can view or propose updates to the code.
- **Everyone grows up sometime.** We can't be weekend warriors forever. We'll need alerts the rest of the week, too.

## Status

### ✅ Achieved!
- **Resolution-independent**
- **Performant**
- **Open source**

### ⏳ In progress
- **Responsive:** needs work on mobile devices!
- **Accessible:** needs accessibility audit!

### ❌ Haven't started!

- **Standards-compliant:** data is used as is, rather than converted to a standard format.
- **Everyone grows up sometime:** still just weekend data only! needs real-time and daily status alerts!

## Notes and changes

- Full screen, removing the gray "dead zones" surrounding the interactive area and giving more room to the map
- Single page app and routing
  - React-router v4 is really good.
  - Preserves back/forward browser navigation.
  - Makes individual stations deep-linkable, which wasn't possible before. (Lines were deep-linkable, though.)
  - Removes the loading transition time (shown as a blank page) between different sections of the app.
  - Standardizes the app header (on the original, the landing page's header is a different layout).
- Typography
   - Tweaks to how the type is laid out
   - Standardized font sizes (e.g. front page has weirdly sized headings compared to rest of app).
   - Station names had inconsistent spacing around dashes, which have been normalized, and now use en-dashes.
- Graphics
   - Wherever possible, images use SVG so that they display crisply on Retina screens. SVG and can be infinitely scaled, which future proofs against future resolutions like 4k monitors, and helps with accessibility, in case someone needs to change the page zoom.
   - In the original, the header uses graphics for each navigation item. This makes them harder to change, and impossible to translate when using Google Translate to localize. In my version I insist on using pure text for navigation items.
   - There's a secret version of the header where "Weekender" is spelled in the subway's original 1960s era font, as a throwback to the use of Vignelli's map. This font is no longer used by the MTA.
- Accessibility / usability
  - Service notices don't have alt tags on images, making them unintelligible to screen readers. You can see for yourself the effect of this by copy-pasting the notice: the subway line identifiers drop out.
  - Link colors were too light. (see contrast ratios.) The links were darkened to just past the contrast ratio suggested by the W3C accessibility group.
  - (TODO) Tab order navigation
- Bullets
  - At first I tried using the official MTA colors, but something felt off. The Weekender's bullets match the lines used on Vignelli's color scheme, which is overall lighter, more pastel. I switched over to using those bullets in order to match the map and it felt much better. In this case, while using the official color scheme would have been more "correct," it didn't seem like the right choice here.
- Branding / meta / SEO
  - Can't use the MTA logo, so I removed that here.
  - For the favicon, I made a stylized "W" sign (short for Weekender). In the original, it used either a pixelated MTA logo (which I can't use), or the Oracle (!!) logo.
  - The original has no meta tags, making it difficult to understand when posted to social media (Twitter, Facebook, Slack, etc). 
- Information
  - Instead of everything being displayed on one line, I extensively parse the incoming text to try and organize the information in a hierarchy. The notice type, .e.g. "Track maintenance" is now displayed as lower case with a initial capital letter (aka sentence case) because this is easier to read. Cross-reference Transport for London. (Other text throughout, like "Weekend Service Notice", is also now displayed in sentence case.)
   - Time/date is also on a separate line.
   - 1pixel black lines now separate different notices.
   - When there's only one notice, display the entire thing immediately, don't require a click to access it.
   - For the line view, when a line is selected, the line bullets fade out (similar to how links are faded) and the selected one remains at full color. This isn't super readable, and there's a bug where hovering over the bullets don't fade back out when you unhover them. Rather than use the bullet list to show what's selected, we now show a larger bullet so it's more obvious what line you are looking at. This is more consistent with station view, is more readable, and is possible now that we have vector-based bullet images.
- Map
  - Now uses Leaflet slippy maps! This enables a smooth transition when zooming. By generating multiple zoom levels from the highest-resolution imagery we can zoom all the way out to the overview from the closest zoom.
- Station view
  - Layout adjusted. More breathing room, better centering/placement of things.
  - Search box is now auto-focused so that you can begin filtering as soon as you land on the page.
  - Search box, when focused, now has a more obvious focus state (better for accessibility).
  - Filtering can now be done entirely by keyboard (use up/down keys to select; enter to activate)
- Brittleness
  - Now that the site is on HTTPS, some legacy stuff won't load, like the service status widget.
  - If the data changes at any time, this fails.
  - We pull MTA data several times a day and cache it in AWS to avoid hitting MTA servers too frequently. If MTA updates late in the day, we may not see updates until the day after.
  - "Good to Know" on the landing page appears to be manually set.
         
