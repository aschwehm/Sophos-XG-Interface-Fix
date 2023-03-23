## Sophos XG Interface Fix

This is an attempt to fix the horrible Sophos XG Interface which looks like it is designed for 720p displays and is nearly unusable with modern display resolutions.

---
### Features
* Scales the main area to fit screen width
* Displays table elements which were invisible
* Gives a name to the HTTPS Header in Web => Policies
* Much more in the future. Please provide feedback on what to improve :)
---
### Prerequisites

* [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/)
* [Stylish](https://addons.mozilla.org/en-US/firefox/addon/stylish/) (You can also use [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) which is much better)
---
### Installation

1. Download and Install all the Addons
2. Create a new Violentmonkey Script, paste the contents of `Violentmonkey/violentmonkey_script.js` and save it.
3. Create a new design in stylish, give it a name, paste the contents of `Stylish/stylish-css.css`.
4. Click on `specify` at the bottom of the page and select `URLs matching the regexp`
5. Insert the Regex `^.*webconsole/webpages.*$` Then click save. Make sure you check Enabled.
6. Finish. The interface should be usable again.
---
### Screenshots (Taken on Waterfox with 2560x1440)
#### Before
![image](https://www.ubload.space/uploads/1679696527.png)
![image](https://www.ubload.space/uploads/1679609736.png)
#### After
![image](https://www.ubload.space/uploads/1679631874.png)
![image](https://www.ubload.space/uploads/1679616813.png)
---
### Bugs

There might be a lot of bugs. I have not tested everything. When I encounter a display error I will fix it since I'm using it in production. Feel free to report any errors as an issue. Please include a Screenshot :)
