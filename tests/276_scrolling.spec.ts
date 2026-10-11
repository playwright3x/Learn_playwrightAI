import{test, expect} from "@playwright/test"

test.describe("to scroll Element ",() =>{
    
     test.beforeEach(async({page})=>{

        page.goto("https://scrolltest.com/playwright-infinite-scroll-lazy-loading/");

     });

     test("Scroll-Test",async({page})=>{

        page.getByRole("heading",{name:"Scrolling a Container Instead of the Window"}).scrollIntoViewIfNeeded();
        const test = await page.getByRole("heading",{name:"Scrolling a Container Instead of the Window"}).textContent();
        await page.evaluate(()=>window.scrollBy(0,1000));
        await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
        await page.evaluate(()=> window.scrollTo(0,0));
        console.log(test);

        await page.pause();

     });

    
     
});

