/* GET 'about' page */
module.exports.about = function(req, res, next) {
    res.render('generic-text', { 
        title: 'About Loc8r',
        content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec tempor orci, non tempus lacus. Sed venenatis iaculis urna, nec pulvinar purus rhoncus quis. Vestibulum porta, tortor non porta sodales, nibh velit vulputate magna, a hendrerit est nisi sed nisi. Donec elementum sit amet arcu quis fermentum. Phasellus felis libero, condimentum a dictum sit amet, viverra nec magna. Fusce in diam porta, porta dolor a, placerat ipsum. Phasellus sed risus felis. Fusce dui urna, ornare non massa ut, tempus vulputate ante. Maecenas quis enim sit amet tellus iaculis bibendum. Sed ac sem purus. Sed laoreet at sem ac commodo.'
    });
};