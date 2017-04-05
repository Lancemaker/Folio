function CreateCard(img,href,tag,title,alt,text){
    this.img = img;
    this.tag = document.querySelector(tag);
    this.text = text;
    this.href=href;
    this.template;
    function PrintCard()
    {
        if(this.href == "null"){
            this.href=this.img;
        }               
        this.template = 
        `
        <div class="image-container">
            <div class="card">
                <a href="${this.href}" target="_blank">
                <img class="card-img-top img-fluid" src="${this.img}" alt="${alt}">
                </a>
                <div class="card-block">
                    <h4 class="card-title">${title}</h4>
                    <p class="card-text">${text}</p>                
                </div>
            </div>
        </div>
        `
        this.tag.innerHTML += this.template;
    }
    PrintCard();
}

