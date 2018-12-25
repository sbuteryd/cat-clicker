const catsModel = {
    now: null,
    cats: [
        {
            name: "Tyler",
            imgSrc: "images/cat1.jpg",
            clickCount: 0
        },
        {
            name: "Jack",
            imgSrc: "images/cat2.jpg",
            clickCount: 0
        },
        {
            name: "Ming",
            imgSrc: "images/cat3.jpg",
            clickCount: 0
        },
        {
            name: "Naccy",
            imgSrc: "images/cat4.jpg",
            clickCount: 0
        },
        {
            name: "Rock",
            imgSrc: "images/cat5.jpg",
            clickCount: 0
        }
    ]
};


const catController = {

    init() {
        catsModel.now = catsModel.cats[0];
        catListView.init();
        catView.init();

    },
    getCats() {
        return catsModel.cats;
    },


};




const catListView = {
    init() {
        this.catName = document.querySelector(".cat-name");
        console.log(this.screenPicture);
        this.render();
    },

    render() {
        let cats = catController.getCats();
        console.log(cats);
        for (let x = 0; x < cats.length; x++) {
            let li = document.createElement('li');
            li.innerText = cats[x].name;
            li.className = `cat-${cats[x].name}`;
            li.addEventListener("click", function () {
                catsModel.now = cats[x];
                let img = document.querySelector(".picture");
                let click = document.querySelector(".click-count");
                let name = document.querySelector(".name");
                img.src = cats[x].imgSrc;
                click.textContent = cats[x].clickCount;
                name.textContent = catsModel.now.name;
            });

            this.catName.appendChild(li);
        }
    }
};



const catView = {
    init() {
        this.picture = document.querySelector(".picture");
        this.name = document.querySelector(".name");

        this.name.textContent = catsModel.now.name;
        this.picture.src = catsModel.now.imgSrc;
        this.render();
    },
    render() {
        this.picture.addEventListener("click", function () {
            catsModel.now.clickCount +=1;
            let click = document.querySelector(".click-count");
            click.textContent = catsModel.now.clickCount;

        })
    }
};



catController.init();
