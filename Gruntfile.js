module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        watch: {
            files: [
                "app/js/**/*.*"
            ],
            tasks: [
                "default"
            ]
        },

		concat: {
			dist: {
				src: [
					'app/js/init.js',
					'app/js/directives/*.js',
					'app/js/services/*.js',
					'app/js/filters/*.js',
					'app/js/controllers/*.js',
					'app/js/app.js'
				],
				dest: 'app/js/build.js'
			}
		}

    });

    grunt.registerTask("default", ["concat", "watch"]);
};
