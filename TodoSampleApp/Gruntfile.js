/// <binding Clean='includeSource' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: "node_modules/jquery/dist",
                    src: ['jquery*.js'],
                    dest: 'Scripts'
                }]
            }
        },
        watch: {
            //...
            includeSource: {
                // Watch for added and deleted scripts to update index.html
                files: ['Scripts/**/*.js', 'Scripts/**/*.css'],
                tasks: ['includeSource'],
                options: {
                    event: ['added', 'deleted']
                }
            }
        },
        includeSource: {         
            options: {
                //This is the directory inside which grunt-include-source will be looking for files
                basePath: 'Scripts',
                
            },            
            app: {
                files: {
                    //Overwriting index.html
                    'index.html': 'index.html'
                }
            }
        }
        

    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['copy', 'includeSource', 'watch']);
};