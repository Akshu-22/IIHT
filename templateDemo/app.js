customElements.define("my-template",

     class extends HTMLElement{

       constructor(){

        super();

        let template =  document.getElementById('showdate');

        let div=document.createElement('div');

        div.innerHTML=`<h2>${Date()}</h2>`;

        document.body.appendChild(div);

        let content= template.content;

        const shadowRoot =this.attachShadow({mode:'open'});

        shadowRoot.appendChild(content.cloneNode(true));

       }


     }


)