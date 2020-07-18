let h1 = document.querySelector("h1");
h1.textContent = "HACKED!"; 

let a = document.querySelectorAll("a"); 

for (let i = 0; i < a.length; i++) {
  a[i].href = "https://thebadguys.com"; 
}

let image = document.createElement("img"); 

image.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"; 

document.body.prepend(image); 

let p = document.querySelectorAll("main > p"); 

for (let i = 0; i < p.length; i++) {
  p[i].remove(); 
}

let paragraph = document.createElement("p"); 

paragraph.textContent = "Your account has been compromised."

document.body.append(paragraph); 

let span = document.querySelector("span"); 

span.textContent = 0; 