function index(req, res) {
    res.render('dashboard/index', {courses: [{title: 'NodeJS'}, {title: 'ReactJS'}]})
}

module.exports = {
    index
}