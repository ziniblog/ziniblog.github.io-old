/*
Language: Pseudo
Description: My custom for pseudo code
Website: None
Category: common
*/

var custom_pseudo_func = function(hljs) {
    return {
        aliases: ['zini'],
        contains: [
            hljs.COMMENT('#', '/\s\s|$/'),
            {
                className: 'doctag',
                begin: '/[<>+|-]+/',
            },
        ],
    };
};

hljs.registerLanguage("pseudo", custom_pseudo_func)