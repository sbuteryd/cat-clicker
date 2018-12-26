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


const catControl = {

    init() {
        catsModel.now = catsModel.cats[0];
        catView.init();
        catListView.init();
    },
    //获取所有猫
    getCats() {
        return catsModel.cats;
    },
    getNowCat() {
        return catsModel.now;
    },
    setNowCat(cat) {
        catsModel.now = cat;
    },
    clickPicture() {
        catsModel.now.clickCount ++;
        catView.render();
    }
};

const catListView = {
    init() {
        this.catList = document.querySelector(".cat-list");
        this.render();
    },
    render() {
        let cats = catControl.getCats();
        const fragment = document.createDocumentFragment();
        for (let x = 0; x < cats.length;  x++) {
            let cat = cats[x],
                li = document.createElement('li');
            li.className = `${cat.name}`;
            li.innerText = cat.name;
            li.addEventListener('click', function () {
                catControl.setNowCat(cat);
                catView.render();
            });
            fragment.appendChild(li);
        }
        this.catList.appendChild(fragment);
    }
};

const catView = {
    init() {
        this.picture = document.querySelector(".picture");
        this.click = document.querySelector(".click-count");
        this.name = document.querySelector(".name");
        this.render();
        this.picture.addEventListener("click", catControl.clickPicture);

    },
    render() {
        let nowCat = catControl.getNowCat();
        this.picture.src = nowCat.imgSrc;
        this.click.textContent = nowCat.clickCount;
        this.name.textContent =  nowCat.name;

    }
};


catControl.init();



