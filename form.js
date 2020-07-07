class Form{
    constructor(){
        this.title = createElement('h2');
        this.q1 = createElement('h4');
        this.a1 = createInput('Ex: Bob');
        this.q2 = createElement('h4');
        this.a2 = createInput('Ex: example@gmail.com');
        this.q3 = createElement('h4');
        this.a3 = createInput('Answer');
        this.q4 = createElement('h4');
        this.a4 = createInput('Answer');
        this.q5 = createElement('h4');
        this.a5 = createInput('Answer');
        this.submit = createButton('Submit');
        this.thx = createElement('h3');
    }  
    hide(){
        this.q1.hide();
        this.a1.hide();
        this.q2.hide();
        this.a2.hide();
        this.q3.hide();
        this.a3.hide();
        this.q4.hide();
        this.a4.hide();
        this.q5.hide();
        this.a5.hide();
        this.submit.hide();
    }     
    display(){
        this.title.html("Covid-19 Work Survey");
        this.title.position(100,30);
        this.a1.position(100,110);
        this.q1.html("What is your name?");
        this.q1.position(100,60);
        this.a2.position(100,170);
        this.q2.html("What is your E-mail?");
        this.q2.position(100,120);
        this.a3.position(100,230);
        this.q3.html("Do you like going to work, or staying at home?");
        this.q3.position(100,180);
        this.a4.position(100,290);
        this.q4.html("What is your favorite thing to do at home?");
        this.q4.position(100,240);
        this.a5.position(100,350);
        this.q5.html("What do you miss most about work?");
        this.q5.position(100,300);
        this.submit.position(100,380);

        this.submit.mousePressed(()=>{
            form.hide();
            this.thx.html("Thank You for Taking the Survey");
            this.thx.position(100,100);
        });
    }
}