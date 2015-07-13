TIMS MAP UI
===============

A frontend app for showing TIMS data on a map via [tims-api-server](https://github.com/pwlin/tims-api-server).

Installation
------------
- Make sure you already have [tims-api-server](https://github.com/pwlin/tims-api-server) up and running.
- Clone the repo into a folder inside the root of your http server. Example: `http://localhost/tims-map-ui/`
- Install all dependencies:

        bower install
- Rename `config.js.sample` to `config.js` and edit `config.API_URL` value so that it points to your tims-api-server URL. If you didn't change your API server port or URL from the default `http://localhost:3000`, you don't need to change anything here too, just rename the file to `config.js`. 
- Now point your browser to `http://localhost/tims-map-ui/` and you should see the London map with all the traffic disruptions around it.

LICENSE
--------
The MIT License (MIT)

Copyright (c) 2015 pwlin - pwlin05@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

