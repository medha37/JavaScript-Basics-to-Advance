// in case of method->object this will return current execution context (whole obj)
// in case of reguler function this will returrn (global, window);

let video = {
    title: "javaScript",
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag) // here function behave like a reguler function so 
                                        // it referencing the global object in this case
        }, this); // pass this as an argument in the forEach loop 
    }

}

console.log(video.showTags());

function Video(title){
    this.title = title;
    //console.log(this);
}
const v = new Video("js");
//console.log(v); // { title: 'js' }