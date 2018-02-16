const FIVE = 5;
console.log(FIVE);
/*
var course = {
    title:  "JavaScript Essential Training",
    instructor:  "Morten Rand-Hendriksen",
    level:  1,
    published:  true,
    views:  0,
    updateViews:  function(){
        return ++course.views;
    }
}

console.log(course);
course.updateViews();
console.log(course);
*/

function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
        return ++course.views;
    }
}

var course01 = new Course("Java", "Morton", "1", true, 0);
var course02 = new Course("sample", "Morton", 1, true, 0);

var newcourses = [
                  new Course("newJava", "JellyRoll", 1, true, 0),
                  new Course("newSample", "JR", 1, true, 0)
                  ];

console.log(course01);
console.log(course02);
console.log(newcourses);
