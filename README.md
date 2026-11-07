# Kourosh Hekmatara — design portfolio

A minimalist, documentation-style portfolio built with plain HTML, CSS and JavaScript. There is no framework or build step.

The home page presents the projects as a scrollable image-led index. Selecting a project in the left navigation opens its full project document in the center, with a description, role, images and process. The left navigation groups projects under Personal projects and Agency projects; current case studies default to Personal projects. Agency currently lists Index, Andulf, Blueair, ISB and Other as labels until case-study content is added. The right navigation changes to show links within an open project, and shows About, Personal projects and More work links on the home page. Project links are unnumbered and use spacing rather than individual divider rules. A theme control switches between light and dark appearance. After the visitor scrolls one-third of a viewport, the side panels move with scroll input: downward scroll moves them out, upward scroll brings them back, and stopping scroll pauses them in place. On small screens, the project list becomes a menu.

## Project assets

The workspace contains four populated image sets:

- Blossom A
- Swedish Girls
- A Swedish Celebrity
- Meccamonster

The `Projects/swedishgirls.org/` folder is empty. The fifth project needs to be supplied before it can be included.

## Adding a project

Add the project’s title, category, short description, cover image, selected images and optional process images to the `projects` array in `script.js`. Add `navGroup: "agency"` for Agency projects; projects default to Personal projects. The index and section links are generated from that data.

## Publishing on a docs-style subdomain

The current site is static and can be hosted on a static-site provider. To use an address such as `docs.yourdomain.com`, add the subdomain in the hosting provider and point its DNS record (typically a CNAME) to the host. Mintlify is another option if the portfolio later becomes a content-managed documentation site; its dashboard provides the custom-domain and DNS instructions.
