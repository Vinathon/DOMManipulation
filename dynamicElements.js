var bodyElements = {
    "elements": [
      {
        "name": "div",
        "class": "container",
        "value": "",
        "elements": [
          {
            "name": "label",
            "class": "",
            "value": "",
            "elements": []
          },
          {
            "name": "button",
            "class": "btn btn-primary",
            "value": "",
            "elements": []
          }
        ]
      }
    ]
  }


  function generateDOM(object){
console.log("object >>>", object)
    for(element in object){
        console.log("this",element);
        console.log(object[element]);
        let ele = document.createElement(object[element].name);
        console.log(object[element].name);
        ele.setAttribute('class',object[element].class);
        console.log(object[element].class);
        ele.value = object[element].value;
        console.log(object[element].value);
        document.body.append(ele);
        console.log("ele >>> ", ele.elements)
        generateDOM(object[element].elements);
    }
    
        
  }

  generateDOM(bodyElements.elements);