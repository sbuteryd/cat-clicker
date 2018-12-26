
//小猫数据模型
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
    //cat-clicker初始化
    init() {
        catsModel.now = catsModel.cats[0];
        catView.init();
        catListView.init();
    },
    //获取所有猫
    getCats() {
        return catsModel.cats;
    },
    //获取当前点击猫
    getNowCat() {
        return catsModel.now;
    },
    //设置当前点击猫
    setNowCat(cat) {
        catsModel.now = cat;
    },
    //点击图片
    clickPicture() {
        catsModel.now.clickCount ++;
        catView.render();
    },
    //图片计数器
    catListClick(cat) {
        catControl.setNowCat(cat);
        catView.render();
    }
};

// 小猫列表视图
const catListView = {
    //列表视图初始化
    init() {
        this.catList = document.querySelector(".cat-list");
        this.render();
    },
    //根据小猫数量初始化列表
    render() {
        const cats = catControl.getCats(),
              fragment = document.createDocumentFragment();
        //循环数组
        cats.forEach((cat) => {
            const li = document.createElement('li');
            li.innerText = `${cat.name}`;
            li.onclick = () => catControl.catListClick(cat);
            fragment.appendChild(li);
        });
        this.catList.appendChild(fragment);
    }
};

// 小猫图片，点击次数视图
const catView = {
    //初始化
    init() {
        this.picture = document.querySelector(".picture");
        this.click = document.querySelector(".click-count");
        this.name = document.querySelector(".name");
        this.render();
        //点击图片事件
        this.picture.onclick = () => catControl.clickPicture();
    },
    //初始化方法
    render() {
        let nowCat = catControl.getNowCat();
        this.picture.src = nowCat.imgSrc;
        this.click.textContent = nowCat.clickCount;
        this.name.textContent =  nowCat.name;
    }
};

//渲染页面
catControl.init();



