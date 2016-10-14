
* when you clone an existing repo with node modules set up with a gulpfile.js, run npm install to install all packages in it.
$ npm install

* same with bower's frontend dependencies (make sure these include bower install jquery --save, bower install moment --save and bower install bootstrap --save, UGH)
$ bower install

* to get your build folders back, INCLUDING APP.JS, run gulp build
$ gulp build

* any files that you don't commit to git like .env and build files (see above), then rebuild them if you're on a new machine.

* finally serve up your business to the brower with gulp serve
$ gulp serve

* whenever you add a new dependency to your gulpfile.js, run gulp jsBuild
$ gulp jsBuild
